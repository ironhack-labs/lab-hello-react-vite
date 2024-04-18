import './FeaturesList.css'

export default function FeaturesList() {
	const features = [
		{
			imgUrl: '/src/assets/icon1.png',
			featureTitle: 'Declarative',
			featureDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, enim.',
		},
		{
			imgUrl: '/src/assets/icon2.png',
			featureTitle: 'Components',
			featureDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, enim.',
		},
		{
			imgUrl: '/src/assets/icon3.png',
			featureTitle: 'Single-way',
			featureDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, enim.',
		},
		{
			imgUrl: '/src/assets/icon4.png',
			featureTitle: 'JSX',
			featureDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, enim.',
		}
	]

	return (
		<section className="featureslist">
			<div className="container">
				{features.map((feature, i) => (
					<div key={i}>
						<img src={feature.imgUrl} alt={feature.featureTitle} />
						<h3>{feature.featureTitle}</h3>
						<p>{feature.featureDescription}</p>
					</div>
				))}
			</div>
		</section>
	)
}
