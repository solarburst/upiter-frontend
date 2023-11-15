'use client';

import { useState } from 'react';

import { GalleryCard } from '@/entities';
import { FullscreenGallery } from '@/features/FullscreenGallery/FullscreenGallery';

import * as S from './Gallery.style';

export const Gallery: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);

    const gallery = [
        {
            id: 1,
            image: 'https://s3-alpha-sig.figma.com/img/2c51/282b/f0a747b6fb03548fc2698e621db8af34?Expires=1701043200&Signature=UNAWMKXKEEqDnsEJ0k0U97EoKcirMwdQ9xtekmExICQa-K28g2ZLosM9wsQDxqZkoELveDibDruRDz4zv6x5bQ8koIqsz0coS2a2rT13r3B6x6oTS9YuciyhZpwsuZpO9GELlW0cHvisWN7vBa967nHJP~rA99dVNcEvMDLW0ZFaWiJjNcrO5vxlZEi8ggifVT5TghM2EgruH5O41Fi5JFLzhGi0vshJsQEE8N1iDz74VEhpP76z0IGRuMAjNILRG7CeghpwF5SesVegNOEJ2MBfr9f2WX1VJF0puX1y41gHlOhZ7fzevNxJjjl28I7kylyKH2MyJ70L3CvWk4MCSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1701043200&Signature=h7w54NiEMn2kRIAOUlQ02dLS9xmHRJKhl7LqCvyce5t7vn2D9d-Yl1uaytARAKrlW8PcJXcVHh5KjwK-LoSK~RbyixQVuQDhwaBgnHs7pmHd-NO8fIR2vpAgatsXVk7PzlwksSKd2p~~V9fA31u1IhloYl5aiw3ij-m1BuH9Gc0XfcfQaChkOcLWkNutuM4pwmwsB5bOFKdYCt1ur~XzIFxxJF6GKG3e90B~aInsAdibY~omUu8K3xHODfLy6RcFTWTioIm3Aa2RywqA4qVUJxCG0Junll0YIciHu2vEZn3cwO6mue0cGlL87XNmijbQmm-RmpWMhvlBXY5M1Wzyvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1701043200&Signature=Mr~vmPEOtkZnBylcJSnCdB9L0aNJtfRO1VjnsagNzsDWv7qyTBEg4rx3zAB1ugiHFB8Hf9gwGoo~8wDN4P8KrnxLb1VttBCzK00Ra0eQIZ-SDxewy7F5WShPhs4sGgCAMP~tlYSyM4ZDEtr0zY5CgZOSas8t2UwUgCCevgia6l6XV6vmg8bjt6RCOKPeYtkjRTY0aLX8X4x772~KFikVpWEO3TSdQpJtdLfYqOmv3Q-hBFsJO8yRiPpxF-uyxp2Igw7SdMLnYJAAumTIKm5EBRNYZME0No0LUHcOcIVTeKEdrvbn0a8jskKbpPF5eUdaODd71dt~ihafH30CTfT0XQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1701043200&Signature=h7w54NiEMn2kRIAOUlQ02dLS9xmHRJKhl7LqCvyce5t7vn2D9d-Yl1uaytARAKrlW8PcJXcVHh5KjwK-LoSK~RbyixQVuQDhwaBgnHs7pmHd-NO8fIR2vpAgatsXVk7PzlwksSKd2p~~V9fA31u1IhloYl5aiw3ij-m1BuH9Gc0XfcfQaChkOcLWkNutuM4pwmwsB5bOFKdYCt1ur~XzIFxxJF6GKG3e90B~aInsAdibY~omUu8K3xHODfLy6RcFTWTioIm3Aa2RywqA4qVUJxCG0Junll0YIciHu2vEZn3cwO6mue0cGlL87XNmijbQmm-RmpWMhvlBXY5M1Wzyvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/0a82/9d7b/cd964dde30228c65c35adcf0cd62d381?Expires=1701043200&Signature=BXnzMECH-3N64uaVjn3tBKVC73~xhjEc15OP9nToHy~2IzTHiuCXUTFfATdtbOH8Q64rixFTZdaV62PLaTS~glgjT7Nhj9aLTlx4lR5L~uOT8HtPVoah00vFad0eVFDb29SQqKZ80L3HWSGzUO3FsynWXvEpBYJ9wDuQ4v03Uk9faAbB4ur-HfSEBWBq9nFsTSQV-4fMaYYSXnut-Sl~PP~9RV4DmMi3zjyQmj~wIYPGTZ5~LuJMTKbRPqUR5ZRuYL4fO9feRVoet94Uo5~r6hW6NCTrHODLMrh-zLijDKi2E1zkkMbERIYWAeMsQOysRzCyAu8udXqjsN50YrPG9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1701043200&Signature=h7w54NiEMn2kRIAOUlQ02dLS9xmHRJKhl7LqCvyce5t7vn2D9d-Yl1uaytARAKrlW8PcJXcVHh5KjwK-LoSK~RbyixQVuQDhwaBgnHs7pmHd-NO8fIR2vpAgatsXVk7PzlwksSKd2p~~V9fA31u1IhloYl5aiw3ij-m1BuH9Gc0XfcfQaChkOcLWkNutuM4pwmwsB5bOFKdYCt1ur~XzIFxxJF6GKG3e90B~aInsAdibY~omUu8K3xHODfLy6RcFTWTioIm3Aa2RywqA4qVUJxCG0Junll0YIciHu2vEZn3cwO6mue0cGlL87XNmijbQmm-RmpWMhvlBXY5M1Wzyvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/0a82/9d7b/cd964dde30228c65c35adcf0cd62d381?Expires=1701043200&Signature=BXnzMECH-3N64uaVjn3tBKVC73~xhjEc15OP9nToHy~2IzTHiuCXUTFfATdtbOH8Q64rixFTZdaV62PLaTS~glgjT7Nhj9aLTlx4lR5L~uOT8HtPVoah00vFad0eVFDb29SQqKZ80L3HWSGzUO3FsynWXvEpBYJ9wDuQ4v03Uk9faAbB4ur-HfSEBWBq9nFsTSQV-4fMaYYSXnut-Sl~PP~9RV4DmMi3zjyQmj~wIYPGTZ5~LuJMTKbRPqUR5ZRuYL4fO9feRVoet94Uo5~r6hW6NCTrHODLMrh-zLijDKi2E1zkkMbERIYWAeMsQOysRzCyAu8udXqjsN50YrPG9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1701043200&Signature=h7w54NiEMn2kRIAOUlQ02dLS9xmHRJKhl7LqCvyce5t7vn2D9d-Yl1uaytARAKrlW8PcJXcVHh5KjwK-LoSK~RbyixQVuQDhwaBgnHs7pmHd-NO8fIR2vpAgatsXVk7PzlwksSKd2p~~V9fA31u1IhloYl5aiw3ij-m1BuH9Gc0XfcfQaChkOcLWkNutuM4pwmwsB5bOFKdYCt1ur~XzIFxxJF6GKG3e90B~aInsAdibY~omUu8K3xHODfLy6RcFTWTioIm3Aa2RywqA4qVUJxCG0Junll0YIciHu2vEZn3cwO6mue0cGlL87XNmijbQmm-RmpWMhvlBXY5M1Wzyvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
        },
    ];

    return (
        <S.StyledPageSection titleType="underlined" title="Галерея" subtitle="фотографии наших покупателей">
            <S.Gallery>
                {gallery.map((item, index) => (
                    <GalleryCard
                        src={item.image}
                        author_image={item.author_image}
                        author_name={item.author_name}
                        key={item.id}
                        handleOnClick={() => {
                            setIsOpen(true);
                            setActiveIndex(index);
                        }}
                    />
                ))}
            </S.Gallery>
            <FullscreenGallery
                images={gallery.map((item) => item.image)}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                activeIndex={activeIndex}
            />
        </S.StyledPageSection>
    );
};
