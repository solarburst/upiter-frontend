'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
    BinIcon,
    BoxIcon,
    Button,
    CardPaymentIcon,
    CartIcon,
    CategorySelect,
    ChatIcon,
    Checkbox,
    CookieBanner,
    CopyIcon,
    Dropdown,
    GalleryCard,
    Input,
    InstagramColoredIcon,
    LabelledCheckbox,
    LabelledInput,
    LogoutIcon,
    MenuIcon,
    Modal,
    PhoneIcon,
    ProfileIcon,
    QuestionIcon,
    SbpIcon,
    SizeSelect,
    Socials,
    SocialsBanner,
    Swiper,
    TelegramColoredIcon,
    TelegramIcon,
    TiktokColoredIcon,
    UpiterLargeLogo,
    UpiterSmallLogo,
    WhatsAppIcon,
    YoutubeColoredIcon,
} from '@/shared/ui';

export const UiKit: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div
            style={{
                padding: '50px 100px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <Button onClick={() => setIsModalOpen(true)}>Click me</Button>
            <Input />
            <Checkbox />
            <LabelledInput label="label" />
            <LabelledCheckbox label="check me" />
            <Dropdown
                options={[
                    {
                        label: <span>2134 fdsa f</span>,
                        value: '1',
                    },
                    {
                        label: <span>231</span>,
                        value: '2',
                    },
                    {
                        label: <span>321</span>,
                        value: '3',
                    },
                ]}
                trigger={<span>trigger</span>}
                onChange={(option) => console.log(option)}
            />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Title">
                fdsf dsaf dsf sda fdsf sdaf saf sadf dsaf sadf dsaf saf ads fsf sdaf dsaf
            </Modal>
            <div
                style={{
                    display: 'flex',
                    gap: 20,
                    flexWrap: 'wrap',
                }}
            >
                <MenuIcon />
                <WhatsAppIcon />
                <TelegramIcon />
                <ChatIcon />
                <CartIcon />
                <BinIcon />
                <CopyIcon />
                <ProfileIcon />
                <LogoutIcon />
                <QuestionIcon />
                <PhoneIcon />
                <TelegramColoredIcon />
                <InstagramColoredIcon />
                <YoutubeColoredIcon />
                <TiktokColoredIcon />
                <BoxIcon />
                <CardPaymentIcon />
                <UpiterSmallLogo />
                <UpiterLargeLogo />
                <SbpIcon />
                <CategorySelect
                    categories={[
                        {
                            value: 'Хвосты',
                        },
                        {
                            value: 'Купальники',
                        },
                    ]}
                />
                <SizeSelect
                    sizes={[
                        {
                            value: 'S',
                        },
                        {
                            value: 'M',
                        },
                        {
                            value: 'L',
                        },
                    ]}
                />
                <Socials />
                <CookieBanner />
                <SocialsBanner />

                <Swiper>
                    <Image
                        src={`https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                        width={384}
                        height={384}
                        alt={''}
                    />
                    <Image
                        src={`https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                        width={384}
                        height={384}
                        alt={''}
                    />
                    <Image
                        src={`https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                        width={384}
                        height={384}
                        alt={''}
                    />
                </Swiper>
            </div>
        </div>
    );
};
