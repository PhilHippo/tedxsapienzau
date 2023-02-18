import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../../resources/styles/blogstyle.css";

const Write = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.title || "");
	const [title, setTitle] = useState(state?.desc || "");
	const [file, setFile] = useState(null);
	const [author, setAuthor] = useState("");

	const navigate = useNavigate();

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axios.post("/upload", formData);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();

		if (file) {
			if (value == "" || title == "") {
				alert("Compila tutti i campi prima di pubblicare l'articolo!");
				return;
			}

			imageToBase64(file).then((res) => {
				console.log(res);
				axios
					.post("http://localhost:8800/blog", {
						title: title,
						description: value,
						autore: author,
						image: res,
						date: new Date(),
					})
					.then((res, err) => {
						console.log(res);
						navigate("/blog");
					})
					.catch((err) => console.error(err));
			});
		} else {
			alert("Aggiungi una foto all'articolo!");
		}
	};

	return (
		<div className="container main-container mt-5 mb-5">
			<div className="content-container">
				<label htmlFor="title" style={{ fontSize: "30px" }}>
					Titolo
				</label>
				<input
					id="title"
					type="text"
					placeholder="Scrivi qui il titolo"
					onChange={(e) => setTitle(e.target.value)}
					className="mb-3"
					style={{ width: "100%" }}
				/>
				<div className="editor-container">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
						style={{ height: "400px", marginBottom: "30px" }}
					/>
				</div>
			</div>
			<div className="menu-container">
				<h3>Completa l'articolo</h3>
				<input
					className="file mb-4"
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<label htmlFor="author">Autore</label>
				<input
					id="author"
					type="text"
					name="author"
					onChange={(e) => setAuthor(e.target.value)}
					className="mb-5"
				/>
				<div className="buttons">
					<button className="button" onClick={handleClick}>
						Publish
					</button>
				</div>
				{/* <div className="item">
					<h1>Category</h1>
					<div className="cat">
						<input
							type="radio"
							checked={cat === "art"}
							name="cat"
							value="art"
							id="art"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="art">Art</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							checked={cat === "science"}
							name="cat"
							value="science"
							id="science"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="science">Science</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							checked={cat === "technology"}
							name="cat"
							value="technology"
							id="technology"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="technology">Technology</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							checked={cat === "cinema"}
							name="cat"
							value="cinema"
							id="cinema"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="cinema">Cinema</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							checked={cat === "design"}
							name="cat"
							value="design"
							id="design"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="design">Design</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							checked={cat === "food"}
							name="cat"
							value="food"
							id="food"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="food">Food</label>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Write;

async function imageToBase64(file) {
	return new Promise((res) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result
				.replace("data:", "")
				.replace(/^.+,/, "");
			res(base64String);
		};
		reader.readAsDataURL(file);
	});
}
