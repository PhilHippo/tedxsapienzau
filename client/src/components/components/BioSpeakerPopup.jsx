import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import global from "../../resources/global.json";
import "../../resources/styles/edizione2022style.css";

export default function BioSpeakerPopup({
	isBioOpen,
	setIsBioOpen,
	selectedSpeakerInfo,
	windowSize,
}) {
	if (windowSize > global.UTILS.TABLET_WIDTH) {
		/**
		 * DESKTOP
		 */
		return (
			<div>
				<div
					style={{
						width: "100vw",
						height: "100vh",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						position: "fixed",
						top: 0,
						left: 0,
						opacity: isBioOpen ? 1 : 0,
						pointerEvents: isBioOpen ? "initial" : "none",
						transition: "all 0.4s ease-in-out",
						zIndex: 10,
					}}
					onClick={() => setIsBioOpen(false)}
				></div>
				<div
					style={{
						height: "100vh",
						width: "600px",
						position: "fixed",
						top: 0,
						right: isBioOpen ? 0 : "-100%",
						zIndex: 11,
						background:
							"linear-gradient(307deg, rgb(130, 36, 51) 29%, #E62B1E 98%)",
						transition: "all 0.4s ease-in-out",
						overflowY: "scroll",
					}}
				>
					<FontAwesomeIcon
						icon={faClose}
						size="2x"
						style={{
							color: "#fff",
							position: "absolute",
							left: "30px",
							top: "30px",
							cursor: "pointer",
						}}
						onClick={() => setIsBioOpen(false)}
					/>
					<img
						src={`data:image/*;base64,${selectedSpeakerInfo.fotoSidebar}`}
						width="100%"
						className="speaker-card-image"
					/>
					<div
						style={{
							width: "95%",
							margin: "auto",
							color: "#fff",
							fontFamily: "GothamBold",
						}}
					>
						<div className="tag-speaker mt-3 mb-1">
							{selectedSpeakerInfo.tag}
						</div>
						<h1>{selectedSpeakerInfo.nomeSpeaker}</h1>
						<p
							className="mt-1"
							style={{ fontSize: "15px", fontFamily: "GothamBook" }}
						>
							{selectedSpeakerInfo.bio}
						</p>
					</div>
				</div>
			</div>
		);
	} else {
		/**
		 * MOBILE / TABLET
		 */
		return (
			<div>
				<div
					style={{
						height: "100vh",
						width: "100vw",
						position: "fixed",
						top: 0,
						right: isBioOpen ? 0 : "-100%",
						zIndex: 11,
						background:
							"linear-gradient(307deg, rgb(130, 36, 51) 29%, #E62B1E 98%)",
						transition: "all 0.4s ease-in-out",
						overflowY: "scroll",
					}}
				>
					<FontAwesomeIcon
						icon={faClose}
						size="2x"
						style={{
							color: "#fff",
							position: "absolute",
							left: "30px",
							top: "30px",
							cursor: "pointer",
						}}
						onClick={() => setIsBioOpen(false)}
					/>
					<img
						src={`data:image/*;base64,${selectedSpeakerInfo.fotoSidebar}`}
						width="100%"
						className="speaker-card-image"
					/>
					<div
						style={{
							width: "95%",
							margin: "auto",
							color: "#fff",
							fontFamily: "GothamBold",
						}}
					>
						<div className="tag-speaker mt-3 mb-1">
							{selectedSpeakerInfo.tag}
						</div>
						<h1>{selectedSpeakerInfo.nomeSpeaker}</h1>
						<p
							className="mt-1"
							style={{ fontSize: "15px", fontFamily: "GothamBook" }}
						>
							{selectedSpeakerInfo.bio}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
