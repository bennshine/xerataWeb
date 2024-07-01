// src/components/HorizontalScroll.js
import React from 'react';
import RegionCard from './RegionCard';

const imagesRegion = {
    'Abruzzo': 'https://i.assetzen.net/i/diyKZ0FvYTsa/w:1200/h:/q:70.jpg',
    'Basilicata': 'https://i0.wp.com/flavorofitaly.com/wp-content/uploads/2019/12/10064AA3-897D-4BF9-AC82-7A67F09C0E8F.jpeg',
    'Calabria': 'https://www.italymammamia.com/images/at-chianalea-calabria-italy.jpg',
    'Campania': 'https://lifeinitaly.com/wp-content/uploads/2018/08/Depositphotos_22920370_m.jpg',
    'Emilia-Romagna': 'https://www.walksofitaly.com/blog/wp-content/uploads/2012/06/Italy-Bologna-view-from-Asinelli-tower..jpg',
    'Friuli Venezia Giulia': 'https://www.travelandleisure.com/thmb/bhH8XPUtmNqDzhmFXXrgorjY1eE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-cividale-del-friuli-friuli-venezia-giulia-italy-ITPAYVISIT1022-b708652a15a545949b8c73d4dab0a0c4.jpg',
    'Lazio': 'https://www.italia.it/content/dam/tdh/en/interests/lazio/roma/roma-la-citta-eterna/media/20210410125258-enit-lazio-roma-tevere.jpg',
    'Liguria': 'https://www.wine-searcher.com/images/region/liguria-3573-1-2.jpg',
    'Lombardia': 'https://rossiwrites.com/wp-content/uploads/2022/03/A-view-of-Bellagio-Lake-Como-Italy-rossiwrites.com_-1024x680.jpg',
    'Marche': 'https://www.secretplaces.com/images/geo-new/region/209-1.jpg',
};

const HorizontalScroll = ({ regions, navigation }) => {
    return (
        <div className="flex overflow-x-auto py-4">
            {regions.map((region, index) => (
                <RegionCard
                    key={index}
                    region={region}
                    imageUrl={imagesRegion[region]}
                    onPress={() => {
                        console.log('Region:', region);
                        navigation.navigate('EventsByRegion', { region: region });
                    }}
                />
            ))}
        </div>
    );
};

export default HorizontalScroll;
