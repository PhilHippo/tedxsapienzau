import React from "react";

export default function ExecutiveTeamCard({
	id,
	nome,
	gruppo,
	ruolo,
	image,
	link,
}) {
	return (
		<>
			<div
				key={id}
				className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
			>
				<div
					className="portfolio-item"
					style={{
						aspectRatio: 1,
						height: "300px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<div className="portfolio-hover">
						<div className="portfolio-hover-content">
							<i className="fas fa-plus fa-3x"></i>
						</div>
					</div>
					<img
						src={`data:image/*;base64,${image}`}
						height="250"
						alt="foto team esecutivo"
					/>

					<div
						className="portfolio-caption"
						style={{
							justifyContent: "center",
						}}
					>
						<a
							href={link}
							style={{
								color: "black",
								textDecoration: "none",
							}}
						>
							<div
								className="portfolio-caption-heading"
								style={{
									fontWeight: "bold",
									textAlign: "center",
									fontSize: "20px",
								}}
							>
								{nome}
							</div>
						</a>
						<div
							className="portfolio-caption-heading"
							style={{
								fontStyle: "italic",
								textAlign: "center",
							}}
						>
							{ruolo}
						</div>
						<div
							className="portfolio-caption-heading"
							style={{
								fontStyle: "italic",
								textAlign: "center",
							}}
						>
							{gruppo == "board" ? "" : gruppo}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
