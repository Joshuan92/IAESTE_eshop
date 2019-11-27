<form style={{ display: "flex", flexDirection: "column" }}>
    <div className="loginForm">
        <h2>Update your profile information</h2>

        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={updatedValues.name}
                onChange={handleUpdate}
            />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                value={updatedValues.email}
                onChange={handleUpdate}
            />
        </div>

        <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
                type="text"
                id="contact_function"
                value={updatedValues.contact_function}
                onChange={handleUpdate}
            />
        </div>

        <div className="form-group">
            <label htmlFor="mailing_address">Email</label>
            <input
                type="text"
                id="mailing_address"
                value={updatedValues.mailing_address}
                onChange={handleUpdate}
            />
        </div>

        <div className="form-group">
            <label htmlFor="phone_number">Phone number</label>
            <input
                type="text"
                id="phone_number"
                value={updatedValues.phone_number}
                onChange={handleUpdate}
            />
        </div>
    </div>
</form>
