import "./Cushion.scss";
import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore"; 
import { storage, db} from '../../firebase';

const Cushion = ({selectedBrand}) => {
    const [loading, setLoading] = useState(true);
    const [cushions, setCushions] = useState([]); 
    const [selectedImages, setSelectedImages] = useState({}); 
    const folderPath = 'cushions/';

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const cushionsRef = ref(storage, folderPath);
                
                const brandResult = await listAll(cushionsRef);
                const brandPromises = brandResult.prefixes.map(async (brandFolderRef) => {
                    const subBrandResult = await listAll(brandFolderRef);
                    const subBrandPromises = subBrandResult.prefixes.map(async (subBrandFolderRef) => {
                        const imagesInSubBrandFolder = await listAll(subBrandFolderRef);
                        const imageUrls = await Promise.all(imagesInSubBrandFolder.items.map(imageRef => getDownloadURL(imageRef)));

                        const mainImage = imageUrls.find(url => url.includes('main-image')) || imageUrls[0];  
                        const mainImageIndex = imageUrls.indexOf(mainImage);

                        const subBrandCollection = collection(db, 'cushions', brandFolderRef.name, 'subBrands');
                        const subBrandDocs = await getDocs(subBrandCollection);
                        const subBrandDetails = subBrandDocs.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data(), 
                        }));
                        return {
                            brand: brandFolderRef.name,
                            subBrand: subBrandFolderRef.name,
                            mainImage,
                            mainImageIndex, 
                            detailImages: imageUrls, 
                            details: subBrandDetails.find(detail => detail.id === subBrandFolderRef.name) || {}, 
                        };
                    });

                    return await Promise.all(subBrandPromises);
                });

                const allSubBrandsImages = await Promise.all(brandPromises);
                
                const initialSelectedImages = allSubBrandsImages.flat().reduce((acc, subBrandData, index) => {
                    acc[index] = subBrandData.mainImageIndex;
                    return acc;
                }, {});

                setSelectedImages(initialSelectedImages); 
                setCushions(allSubBrandsImages.flat());  
                setLoading(false);
            } catch (error) {
                console.error("Error fetching images:", error);
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    // Handle thumbnail click
    const handleThumbnailClick = (originalIndex, newMainImage, imgIndex) => {
        setCushions(prevCushions => {
            const updatedCushions = [...prevCushions];
            updatedCushions[originalIndex].mainImage = newMainImage;
            return updatedCushions;
        });

        setSelectedImages(prevSelected => ({
            ...prevSelected,
            [originalIndex]: imgIndex 
        }));
    };

    // Filter cushions based on the selected brand
    const filteredCushions = selectedBrand === "All" 
        ? cushions 
        : cushions.filter((cushion) => cushion.brand === selectedBrand);

    return (
        <div className="cushion-container">
            {loading ? (
                <div className="loading-indicator">Loading...</div>
            ) : (
                <>
                    <h1 className="brand-header">{selectedBrand}</h1>
                    {filteredCushions.map((subBrandData, index) => {
                        const originalIndex = cushions.findIndex(cushion => 
                            cushion.brand === subBrandData.brand && cushion.subBrand === subBrandData.subBrand
                        ); // Map filtered index to original index

                        return (
                            <div key={index} className="folder-section">
                                <div className="cushion-content-container">
                                    {subBrandData.mainImage && (
                                        <img
                                            src={subBrandData.mainImage}
                                            alt={`${subBrandData.subBrand}`}
                                            className="main-image"
                                        />
                                    )}

                                    <div className="cushion-details-container">
                                        <h3>{subBrandData.details.name}</h3>
                                        <p>{subBrandData.details.description}</p>
                                        <h5>RM{subBrandData.details.price}</h5>
                                    </div>
                                </div>

                                <div className="detail-images">
                                    {subBrandData.detailImages.slice().reverse().map((image, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={image}
                                            alt={`Detail ${imgIndex}`}
                                            className={`thumbnail ${selectedImages[originalIndex] === subBrandData.detailImages.length - 1 - imgIndex ? 'selected' : ''}`}
                                            onClick={() => handleThumbnailClick(originalIndex, image, subBrandData.detailImages.length - 1 - imgIndex)}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default Cushion;
