'use client';

import { Formik } from 'formik';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import * as Yup from 'yup';

import { sendOrder } from '@/shared/api';
import { Product } from '@/shared/api/types';
import { useAppSelector } from '@/shared/hooks';
import { Button, LabelledInput, Modal, OrderCard } from '@/shared/ui';

import * as S from './OrderModal.style';
import { OrderModalProps } from './OrderModal.types';

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, setIsOpen }) => {
    const t = useTranslations('Order');
    const product = useAppSelector<Product | null>((state) => state.product.product);
    const size = useAppSelector<string | null>((state) => state.product.size);
    const [status, setStatus] = useState<string>();

    const initialValues = {
        firstName: '',
        lastName: '',
        patronymic: '',
        state: '',
        region: '',
        city: '',
        postIndex: '',
        street: '',
        house: '',
        apartment: '',
        entrance: '',
        floor: undefined,
        phone: '',
        email: '',
        comment: '',
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        patronymic: Yup.string(),
        state: Yup.string().required('Required'),
        region: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postIndex: Yup.string().required('Required'),
        street: Yup.string().required('Required'),
        house: Yup.string().required('Required'),
        apartment: Yup.string(),
        entrance: Yup.string(),
        floor: Yup.number().integer('Must be an integer').positive('Must be a positive number'),
        phone: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        comment: Yup.string().required('Required'),
    });

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t('cart')}>
            {size && product && (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        const data = {
                            user: {
                                firstName: values.firstName,
                                secondName: values.patronymic,
                                surname: values.lastName,
                            },
                            products: [
                                {
                                    id: product?.id,
                                    size: size,
                                    count: 1,
                                },
                            ],
                            delivery: {
                                state: values.state,
                                region: values.region,
                                city: values.city,
                                postIndex: values.postIndex,
                                street: values.street,
                                house: values.house,
                                apartment: values.apartment,
                                entrance: values.entrance,
                                floor: values.floor,
                                phone: values.phone,
                                email: values.email,
                                comment: values.comment,
                            },
                        };
                        sendOrder(data)
                            .then(() => {
                                setStatus('ok');
                            })
                            .catch(() => {
                                setStatus('error');
                            });
                        setSubmitting(false);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <S.Form onSubmit={handleSubmit}>
                            <LabelledInput
                                type="text"
                                name="firstName"
                                label={t('firstName')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                error={errors.firstName && touched.firstName && errors.firstName}
                            />
                            <LabelledInput
                                name="lastName"
                                label={t('lastName')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                error={errors.lastName && touched.lastName && errors.lastName}
                            />
                            <LabelledInput
                                name="patronymic"
                                label={t('patronymic')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.patronymic}
                                error={errors.patronymic && touched.patronymic && errors.patronymic}
                            />
                            <LabelledInput
                                name="state"
                                label={t('state')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.state}
                                error={errors.state && touched.state && errors.state}
                            />
                            <LabelledInput
                                name="region"
                                label={t('region')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.region}
                                error={errors.region && touched.region && errors.region}
                            />
                            <LabelledInput
                                name="city"
                                label={t('city')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                                error={errors.city && touched.city && errors.city}
                            />
                            <LabelledInput
                                name="postIndex"
                                label={t('postIndex')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.postIndex}
                                error={errors.postIndex && touched.postIndex && errors.postIndex}
                            />
                            <LabelledInput
                                name="street"
                                label={t('street')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.street}
                                error={errors.street && touched.street && errors.street}
                            />
                            <LabelledInput
                                name="house"
                                label={t('house')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.house}
                                error={errors.house && touched.house && errors.house}
                            />
                            <LabelledInput
                                name="apartment"
                                label={t('apartment')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.apartment}
                                error={errors.apartment && touched.apartment && errors.apartment}
                            />
                            <LabelledInput
                                name="entrance"
                                label={t('entrance')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.entrance}
                                error={errors.entrance && touched.entrance && errors.entrance}
                            />
                            <LabelledInput
                                name="floor"
                                label={t('floor')}
                                type="number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.floor}
                                error={errors.floor && touched.floor && errors.floor}
                            />
                            <LabelledInput
                                name="phone"
                                label={t('phone')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                error={errors.phone && touched.phone && errors.phone}
                            />
                            <LabelledInput
                                name="email"
                                label={t('email')}
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={errors.email && touched.email && errors.email}
                            />
                            <LabelledInput
                                name="comment"
                                label={t('comment')}
                                multiline
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                                error={errors.comment && touched.comment && errors.comment}
                            />
                            <OrderCard product={product} />
                            {status && (
                                <S.Status status={status}>
                                    {status === 'ok' && 'Ваша заявка отправлена, с вами свяжутся в ближайшее время'}
                                    {status === 'error' && 'Произошла ошибка'}
                                </S.Status>
                            )}
                            <Button type="submit" disabled={isSubmitting}>
                                {t('order')}
                            </Button>
                        </S.Form>
                    )}
                </Formik>
            )}
        </Modal>
    );
};
