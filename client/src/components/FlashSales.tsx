import Slider from "react-slick";
import ProductCard from './ProductCard';

const FlashSales = () => {
    const products = [
        {
            _id: "66cf33befb867dd075378b29",
            name: "Abdul Moiz",
            description: "it is a gaming laptop",
            media: [], // Assuming no image for now
            price: 542,
            discount: 32312,
            finalPrice: -174589.04,
            userId: "66cebbb55486800ac31dc4e5",
            averageRating: 0,
            stocks: "in_stock",
            categories: ["category1"],
            isActive: true,
            reviews: [],
            dateAdded: "2024-08-28T14:27:10.678+00:00",
            lastUpdated: "2024-08-28T14:27:10.679+00:00",
            __v: 0,
        },
        // Add more product objects as needed based on the data you have
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="text-center my-8">
            <Slider {...settings}>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </Slider>
        </section>
    );
};

export default FlashSales;
