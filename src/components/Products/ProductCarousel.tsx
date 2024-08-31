import { useDispatch } from "react-redux";

function ProductCarousel(props: any) {
    return <>
        <div className="carousel h-44 w-full border border-red-600">
            <h2>{props.title}</h2>
        </div>
    </>
}

export default ProductCarousel;