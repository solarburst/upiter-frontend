'use client';

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
    CopyIcon,
    Dropdown,
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
    // Swiper,
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
                {/* <Swiper>
        </Swiper> */}
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
            </div>
        </div>
    );
};
