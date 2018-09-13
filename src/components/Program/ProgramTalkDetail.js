import React, { Component } from 'react';

export default class ProgramTalkDetail extends Component {
	state = { talk: null, error: null, isLoaded: false };

	createDangerousMarkup( talk ) {
		return { __html: talk.description };
	}

	render() {

		const { talk, error, isLoaded } = this.state;

		if (error) {

			return <div>{error.message}</div>

		} else if (!isLoaded) {

			return <div>Loading...</div>

		} else {

			return (
				<article className="b-talk">

					<section className="b-section b-section--dark b-section--talk-main">
						<div className="container">
							<div className="row">
								<div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
									<div className="b-talk__image pt-5">
										<img src={talk.image} alt="Let's continue doing business"
											className="img-fluid img-thumbnail" />
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
									<div className="mt-3 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 text-center text-sm-left">
										<span className="b-talk__place text-uppercase d-block">{talk.room.name}</span>
										<h1 className="b-talk__title">{talk.title}</h1>
										<p className="b-talk__speaker pb-5">
											<strong>Speaker: </strong>
											<span>{talk.speaker.name}</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="b-section b-section--highlighted">
						<span className="b-talk__time text-center d-block p-3">
							Hora
            </span>
					</section>

					<section className="b-section b-section--talk-extra">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="mt-5">
										<div className="text-center text-sm-left" dangerouslySetInnerHTML={ this.createDangerousMarkup(talk) }></div>
									</div>
								</div>
							</div>
						</div>
					</section>

				</article>
			);

		}

	}

	componentDidMount() {
		console.log('componentDidMount');

		const { slug } = this.props.match.params;
		const url = `http://conference.webtraining.fun/api/talks/${ slug }`;

		fetch(url)
			.then(response => response.json())
			.then(result => {
				console.log(result);

				this.setState({
					isLoaded: true,
					talk: result
				});

			})
			.catch(err => console.log(err));


	}
}