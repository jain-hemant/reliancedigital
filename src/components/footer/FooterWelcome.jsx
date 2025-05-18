import React from 'react';

const FooterWelcome = () => {
  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="container mx-auto">
        {/* Welcome message */}
        <h2 className="text-lg font-bold mb-4">Welcome to Reliance Digital - Your One-Stop Destination for Electronics Shopping!</h2>
        
        {/* Main description */}
        <p className="text-sm mb-4">
          Discover the convenience of shopping for all your electronic needs from the comfort of your home with Reliance Digital Online. 
          As India's premier online electronics store, we bring you an extensive range of the latest gadgets, appliances, and tech accessories at competitive prices.
        </p>
        
        {/* Product categories with bullet points */}
        <ul className="list-disc pl-6 space-y-3 text-sm">
          <li>
            <span className="font-bold">Mobiles:</span> Stay connected and ahead of the curve with the{' '}
            <a href="/category/mobiles" className="text-blue-600 hover:underline">latest mobiles</a>{' '}
            from top brands. At Reliance Digital, you'll find the coolest smartphones with exclusive offers and recommendations to help you stay connected in style.
          </li>
          
          <li>
            <span className="font-bold">Laptops:</span> Power up your productivity and gaming experience with cutting-edge{' '}
            <a href="/category/laptops" className="text-blue-600 hover:underline">laptops</a>{' '}
            for work and play. Whether you're a student, freelancer, or avid gamer, Reliance Digital offers a wide range of laptops at competitive prices to suit your needs and budget.
          </li>
          
          <li>
            <span className="font-bold">Home Appliances:</span> Make your space more efficient and comfortable with our range of smart home appliances. From{' '}
            <a href="/category/refrigerators" className="text-blue-600 hover:underline">Refrigerators</a>,{' '}
            <a href="/category/ac" className="text-blue-600 hover:underline">ACs</a> to{' '}
            <a href="/category/washing-machines" className="text-blue-600 hover:underline">Washing machines</a>, Reliance Digital has everything you need to make your space more efficient and comfortable.
          </li>
          
          <li>
            <span className="font-bold">Audio:</span> Enjoy music at home or on-the-go with our{' '}
            <a href="/category/bluetooth-speakers" className="text-blue-600 hover:underline">Bluetooth speakers</a>,{' '}
            <a href="/category/headphones" className="text-blue-600 hover:underline">Headphones</a>. Create your own music with musical keyboards, Guitars and more. Discover your music with audio products at Reliance Digital across top Brands and offers that suit your budget.
          </li>
          
          <li>
            <span className="font-bold">Kitchen Appliances:</span> Enhance your cooking experience with your culinary skills with our range of kitchen gadgets and appliances. At Reliance Digital, you'll find the latest kitchen essentials{' '}
            <a href="/category/microwave-ovens" className="text-blue-600 hover:underline">Microwave Ovens</a>,{' '}
            <a href="/category/mixer-grinders" className="text-blue-600 hover:underline">Mixer Grinders</a>, to help you cook like a pro and keep your kitchen looking sleek and modern.
          </li>
          
          <li>
            <span className="font-bold">Personal Care Products:</span> Look and feel your best with our range of{' '}
            <a href="/category/personal-care" className="text-blue-600 hover:underline">personal care products</a>. From grooming essentials to skincare devices, Reliance Digital offers a curated selection of products to help you maintain your personal style and well-being.
          </li>
          
          <li>
            <span className="font-bold">Televisions:</span> Elevate your home-watching experience with our range of high-definition televisions. Whether you're streaming your favorite TV shows or gaming with friends, Reliance Digital offers the latest{' '}
            <a href="/category/tvs" className="text-blue-600 hover:underline">TV models</a> with stunning visuals and immersive sound to enhance your entertainment experience.
          </li>
          
          <li>
            <span className="font-bold">Cameras:</span> Capture and share your adventures with high-quality cameras and accessories. From travel photos to Instagram-worthy selfies, Reliance Digital offers a wide range of{' '}
            <a href="/category/cameras" className="text-blue-600 hover:underline">DSLR cameras</a>, Action cameras and accessories to help you capture and share your favourite moments with ease.
          </li>
          
          <li>
            <span className="font-bold">Accessories:</span> Level up your tech game with the perfect accessories for your devices. At Reliance Digital, you'll find a wide selection of accessories to personalize and enhance your devices, from keyboards, Computer mouse to Wifi routers, extenders and more.
          </li>
        </ul>
        
        {/* Shopping experience */}
        <p className="text-sm mt-4">
          Reliance Digital offers a seamless online electronic shopping experience, allowing you to buy electronics online with ease. Take advantage of our:
        </p>
        
        <ul className="list-disc pl-6 space-y-3 text-sm mt-2">
          <li>
            <span className="font-bold">Multiple Finance Options:</span> Reliance Digital offers multiple finance options (EMI, No Cost EMI) with offers, giving you the flexibility to choose a payment plan that suits your budget and needs. Whether you prefer to pay upfront, in instalments, or through EMI, we've got you covered.
          </li>
          
          <li>
            <span className="font-bold">Reliance ResQ Service Guarantee:</span> We know that peace of mind is priceless, especially when it comes to your electronic purchases. That's why every purchase you make at Reliance Digital is backed by our{' '}
            <a href="/resq" className="text-blue-600 hover:underline">Reliance ResQ</a> service guarantee. Rest easy knowing that you're covered with reliable after-sales support, ensuring your satisfaction with every purchase.
          </li>
          
          <li>
            <span className="font-bold">Unmatched Network:</span> Living in a fast-paced world means you need access to your favourite electronics wherever and wherever you are. With over 2000 stores spanning 700 cities, Reliance Digital ensures that we're always close by to serve you better. Whether you prefer to shop online or visit us in-store, our extensive network ensures that you'll never have to go far to get your hands on the latest gadgets and accessories.
          </li>
        </ul>
        
        {/* Call to action */}
        <p className="text-sm mt-4">
          Join the millions of satisfied customers who trust Reliance Digital for their electronic shopping needs. Download our app or browse our online store to experience the best in technology and customer service.
        </p>
      </div>
    </div>
  );
};

export default FooterWelcome;
