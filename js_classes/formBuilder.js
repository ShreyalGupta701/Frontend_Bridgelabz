// formBuilder.js

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        let html = "<form id='dynamicForm'>";

        this.fields.forEach(field => {
            html += `
                <label>${field.label}</label>
                <input type="${field.type}" id="${field.label}" />
                <br><br>
            `;
        });

        html += "<button type='submit'>Submit</button></form>";

        container.innerHTML = html;

        document.getElementById("dynamicForm").addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(this.getFormData());
        });
    }

    getFormData() {
        const data = {};
        this.fields.forEach(field => {
            data[field.label] = document.getElementById(field.label).value;
        });
        return data;
    }
}

// Example use:
const fb = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);

fb.render("formContainer");
