import { useState } from "react";

export default function CommentForm() {
    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        });
    };

    return (
        <div>
            <h3>Give a comment</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <br /><br />

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    placeholder="Add a remark"
                    name="remarks"
                    id="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                />
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input
                    type="number"
                    placeholder="Rating"
                    name="rating"
                    id="rating"
                    min={1}
                    max={10}
                    value={formData.rating}
                    onChange={handleInputChange}
                />
                <br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
