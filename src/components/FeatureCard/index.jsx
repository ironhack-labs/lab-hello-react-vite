import "./FeatureCard.css";

export default function FeatureCard({ imgSrc, imgAlt, title, description }) {
  return (
    <article className="FeatureCard">
      <img src={imgSrc} alt={imgAlt} />
      <h1 className="text-lg">{title}</h1>
      <p className="text-sm">{description}</p>
    </article>
  );
}
