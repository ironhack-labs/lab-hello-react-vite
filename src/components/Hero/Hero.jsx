import './Hero.css'

export default function Hero(props) {
	return (
		<section className="hero">
			<div className="container">
				<div className="col">
					<h1>
						{props.mainTitle}
					</h1>
					<p className="lead">
						{props.leadText}
					</p>
					<a href={props.ctaUrl} className="btn-primary">{props.ctaText}</a>
				</div>
			</div>
		</section>
	)
}
