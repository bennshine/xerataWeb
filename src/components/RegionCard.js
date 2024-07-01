// src/components/RegionCard.js
import React from 'react';

const RegionCard = ({ region, imageUrl, onPress }) => {
    return (
        <div
            onClick={onPress}
            className="cursor-pointer mx-2"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 10,
                height: 190,
                width: 120,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    color: 'white',
                }}
            >
                {region}
            </div>
        </div>
    );
};

export default RegionCard;
