import ProductPage from '@/app/components/products/productPage/productPage';
import { SERVER_URL } from '@/app/lib/constants';

export async function generateMetadata({ params }) {
  const id = params.slug;
  const product = await fetch(`${SERVER_URL}products/id/${id}`).then(res =>
    res.json()
  );
  return {
    title: `Smokey - ${product.title}`,
    description: product.description,
    openGraph: {
      title: `Smokey - ${product.title}`,
      description: product.description,
      url: `https://smokey.top/accessories/${id}/`,
      siteName: 'Smokey',
      images: [
        {
          url: PRODUCT_IMAGE_URL + product.images[0],
          width: 600,
          height: 800,
          alt: product.brand,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function Bowl() {
  return (
    <>
      <ProductPage />
    </>
  );
}
