const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#destination").value.trim();

  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/bucketlist`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector("#new-form-post")
  .addEventListener("submit", newFormHandler);
