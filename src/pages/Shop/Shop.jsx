import { Newsletter } from "../../components/Newsletter/Newsletter";
import "./shop.css";
export const Shop = () => {
  return (
    <div className="mainContainer container">
      <section class="ceramic-products">
        <h2>About Ceramic Products</h2>
        <p>
          Ceramic products are among the most timeless and popular choices for
          home décor and kitchenware. From ceramic mugs and plates to vases and
          decorative pieces, these items are loved for their elegant look,
          durability, and the natural warmth they bring to any space. Ceramics
          combine simplicity and sophistication, adding a cozy and stylish touch
          to your home.
        </p>

        <h2>Features and Benefits</h2>
        <p>
          One of the main advantages of ceramic tableware is its resistance to
          heat, scratches, and wear. That’s why many people prefer using ceramic
          mugs and plates for everyday use or special occasions. The smooth,
          glazed surface makes them easy to clean and prevents them from
          absorbing odors or colors. Ceramic products also come in a wide
          variety of colors and patterns, making them suitable for every décor
          style.
        </p>

        <h2>Design and Aesthetic</h2>
        <p>
          Ceramic pieces are not only practical but also artistic. Handmade
          designs, minimalist patterns, and nature-inspired textures turn them
          into unique decorative elements. In recent years, matte finishes and
          earthy tones have become especially popular, giving ceramic
          collections a modern and natural feel.
        </p>

        <h2>Sustainability and Eco-Friendliness</h2>
        <p>
          Ceramic is one of the most environmentally friendly materials — made
          from natural clay and far more sustainable than plastic alternatives.
          Choosing ceramic cups, plates, and bowls over disposable products
          helps reduce waste and contributes to a cleaner planet.
        </p>
      </section>
      <Newsletter />
    </div>
  );
};
