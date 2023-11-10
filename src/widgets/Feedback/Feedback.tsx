'use client';

import { FeedbackCard } from '@/entities';
import { Container, UnderlinedTitle } from '@/shared/ui';

import * as S from './Feedback.style';
// import { FeedbackOption, FeedbackProps } from './Feedback.types';

export const Feedback: React.FC = () => {
    const feedback = [
        {
            id: 1,
            image: 'https://s3-alpha-sig.figma.com/img/bac5/f480/23c80f8f9d3deda0024d7523084a3bc5?Expires=1700438400&Signature=PiRn0ZOmYareGtIvF-DC5xoXRzRKOqzVRekWyMYyh8w9ijknjWid44Ccl7npDwBzlsZfaxMXX3O0iKLJsxiA2cLiTBKwy3Fh0LvPFSz~1aE0kntslZUUqCcwQYqXdclUqBuCFOysa47OpuwLANMp-26s8rpsonXRFN-y0PWrbbaGAQOtVijxVxbMHKHo5oSogmCcIO5XPlLtfK64jQHFF2VL1dmKlFyfRFB8LXFnVeIiAdZCLiKl9W4BKmFNgixmqm0hlWFRktWjAstiN3ZOw1~RXYCWNsr10C5F9eaWjDyCxARVb2z3KQuy-ikYNaOpyAYF~Waf90j-QirPUHddCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/2d43/87e6/1a700ad36233ea307483ba1f211ef68b?Expires=1700438400&Signature=S8-2G~dyJ3VdmFB7A3Rqlv8j6njI~ZKVn2OjKxruC3LZ4vz3efJzQPEpgRWOxhOfHIK1Ob0l~a1N7IJ-uVx7FCL3p2hITMf1Qrj-Ejaxz-tpqY0PWMDLcqRw76JcNqh89Le2kUnGWxwm8AqQhT3qYkUbbs~U865YVIQIa7yVzS6wyc~RuEauhXFZC1cO0u~zNE2c5scbJVTBNtlL77fKfQ68~Q6eEk9NswrPE4-HcXTBW9EpksRihrru~R-ecIp~9b-u6V3aoVFQfRXpxtOqm5s9-mN0EsQW-guo63yvbN1Y~pPgzV9-OXyV9M-fTQp2wTOrNjxji63DnRWrSotwpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/bac5/f480/23c80f8f9d3deda0024d7523084a3bc5?Expires=1700438400&Signature=PiRn0ZOmYareGtIvF-DC5xoXRzRKOqzVRekWyMYyh8w9ijknjWid44Ccl7npDwBzlsZfaxMXX3O0iKLJsxiA2cLiTBKwy3Fh0LvPFSz~1aE0kntslZUUqCcwQYqXdclUqBuCFOysa47OpuwLANMp-26s8rpsonXRFN-y0PWrbbaGAQOtVijxVxbMHKHo5oSogmCcIO5XPlLtfK64jQHFF2VL1dmKlFyfRFB8LXFnVeIiAdZCLiKl9W4BKmFNgixmqm0hlWFRktWjAstiN3ZOw1~RXYCWNsr10C5F9eaWjDyCxARVb2z3KQuy-ikYNaOpyAYF~Waf90j-QirPUHddCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/2d43/87e6/1a700ad36233ea307483ba1f211ef68b?Expires=1700438400&Signature=S8-2G~dyJ3VdmFB7A3Rqlv8j6njI~ZKVn2OjKxruC3LZ4vz3efJzQPEpgRWOxhOfHIK1Ob0l~a1N7IJ-uVx7FCL3p2hITMf1Qrj-Ejaxz-tpqY0PWMDLcqRw76JcNqh89Le2kUnGWxwm8AqQhT3qYkUbbs~U865YVIQIa7yVzS6wyc~RuEauhXFZC1cO0u~zNE2c5scbJVTBNtlL77fKfQ68~Q6eEk9NswrPE4-HcXTBW9EpksRihrru~R-ecIp~9b-u6V3aoVFQfRXpxtOqm5s9-mN0EsQW-guo63yvbN1Y~pPgzV9-OXyV9M-fTQp2wTOrNjxji63DnRWrSotwpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 5,
            image: 'https://s3-alpha-sig.figma.com/img/bac5/f480/23c80f8f9d3deda0024d7523084a3bc5?Expires=1700438400&Signature=PiRn0ZOmYareGtIvF-DC5xoXRzRKOqzVRekWyMYyh8w9ijknjWid44Ccl7npDwBzlsZfaxMXX3O0iKLJsxiA2cLiTBKwy3Fh0LvPFSz~1aE0kntslZUUqCcwQYqXdclUqBuCFOysa47OpuwLANMp-26s8rpsonXRFN-y0PWrbbaGAQOtVijxVxbMHKHo5oSogmCcIO5XPlLtfK64jQHFF2VL1dmKlFyfRFB8LXFnVeIiAdZCLiKl9W4BKmFNgixmqm0hlWFRktWjAstiN3ZOw1~RXYCWNsr10C5F9eaWjDyCxARVb2z3KQuy-ikYNaOpyAYF~Waf90j-QirPUHddCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 6,
            image: 'https://s3-alpha-sig.figma.com/img/2d43/87e6/1a700ad36233ea307483ba1f211ef68b?Expires=1700438400&Signature=S8-2G~dyJ3VdmFB7A3Rqlv8j6njI~ZKVn2OjKxruC3LZ4vz3efJzQPEpgRWOxhOfHIK1Ob0l~a1N7IJ-uVx7FCL3p2hITMf1Qrj-Ejaxz-tpqY0PWMDLcqRw76JcNqh89Le2kUnGWxwm8AqQhT3qYkUbbs~U865YVIQIa7yVzS6wyc~RuEauhXFZC1cO0u~zNE2c5scbJVTBNtlL77fKfQ68~Q6eEk9NswrPE4-HcXTBW9EpksRihrru~R-ecIp~9b-u6V3aoVFQfRXpxtOqm5s9-mN0EsQW-guo63yvbN1Y~pPgzV9-OXyV9M-fTQp2wTOrNjxji63DnRWrSotwpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 7,
            image: 'https://s3-alpha-sig.figma.com/img/bac5/f480/23c80f8f9d3deda0024d7523084a3bc5?Expires=1700438400&Signature=PiRn0ZOmYareGtIvF-DC5xoXRzRKOqzVRekWyMYyh8w9ijknjWid44Ccl7npDwBzlsZfaxMXX3O0iKLJsxiA2cLiTBKwy3Fh0LvPFSz~1aE0kntslZUUqCcwQYqXdclUqBuCFOysa47OpuwLANMp-26s8rpsonXRFN-y0PWrbbaGAQOtVijxVxbMHKHo5oSogmCcIO5XPlLtfK64jQHFF2VL1dmKlFyfRFB8LXFnVeIiAdZCLiKl9W4BKmFNgixmqm0hlWFRktWjAstiN3ZOw1~RXYCWNsr10C5F9eaWjDyCxARVb2z3KQuy-ikYNaOpyAYF~Waf90j-QirPUHddCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 8,
            image: 'https://s3-alpha-sig.figma.com/img/2d43/87e6/1a700ad36233ea307483ba1f211ef68b?Expires=1700438400&Signature=S8-2G~dyJ3VdmFB7A3Rqlv8j6njI~ZKVn2OjKxruC3LZ4vz3efJzQPEpgRWOxhOfHIK1Ob0l~a1N7IJ-uVx7FCL3p2hITMf1Qrj-Ejaxz-tpqY0PWMDLcqRw76JcNqh89Le2kUnGWxwm8AqQhT3qYkUbbs~U865YVIQIa7yVzS6wyc~RuEauhXFZC1cO0u~zNE2c5scbJVTBNtlL77fKfQ68~Q6eEk9NswrPE4-HcXTBW9EpksRihrru~R-ecIp~9b-u6V3aoVFQfRXpxtOqm5s9-mN0EsQW-guo63yvbN1Y~pPgzV9-OXyV9M-fTQp2wTOrNjxji63DnRWrSotwpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
    ];

    return (
        <S.Root>
            <Container>
                <S.Title>
                    <UnderlinedTitle>Отзывы</UnderlinedTitle>
                </S.Title>
                <S.Reviews slidesPerView={4}>
                    {feedback.map((item) => (
                        <FeedbackCard src={item.image} key={item.id} />
                    ))}
                </S.Reviews>
            </Container>
        </S.Root>
    );
};
