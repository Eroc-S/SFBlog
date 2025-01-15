// Menu toggle functionality
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Dynamic card rendering functionality
document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");

  // Card data for each category
  const cardsData = {
    latest: [
      {
        title: "Latest Article 1",
        description: "Description for the latest article 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg", // YouTube embed link
      },
      {
        title: "Latest Article 2",
        description: "Description for the latest article 2.",
        imgSrc: "blog2.png", // Image source
      },
      // other cards...
      {
        title: "Latest Article 1",
        description: "Description for the latest article 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg", // YouTube embed link
      },
      {
        title: "Latest Article 2",
        description: "Description for the latest article 2.",
        imgSrc: "blog2.png", // Image source
      },
      {
        title: "Latest Article 1",
        description: "Description for the latest article 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg", // YouTube embed link
      },
      {
        title: "Latest Article 2",
        description: "Description for the latest article 2.",
        imgSrc: "blog2.png", // Image source
      },
      {
        title: "Latest Article 2",
        description: "Description for the latest article 2.",
        imgSrc: "blog2.png", // Image source
      },
      {
        title: "Latest Article 1",
        description: "Description for the latest article 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg", // YouTube embed link
      },
      
    ],
    editorsPicks: [
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        imgSrc: "blog3.png",
      },
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg",
      },
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        imgSrc: "blog1.png",
      },
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        imgSrc: "blog4.png",
      },
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg",
      },
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        imgSrc: "blog1.png",
      },
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg",
      },
      // other cards...
      {
        title: "Editor's Pick 1",
        description: "Description for the editor's pick 1.",
        youtubeSrc: "https://www.youtube.com/embed/uh4e1yppnfg",
      },
    ],
    popular: [
      {
        title: "Popular Article 1",
        description: "Description for the popular article 1.",
        imgSrc: "blog2.png",
      },
      // other cards...
      {
        title: "Popular Article 1",
        description: "Description for the popular article 1.",
        imgSrc: "blog2.png",
      },
      {
        title: "Popular Article 1",
        description: "Description for the popular article 1.",
        imgSrc: "blog2.png",
      },
      {
        title: "Popular Article 1",
        description: "Description for the popular article 1.",
        imgSrc: "blog2.png",
      },
    ],
  };

  // Function to render cards
  const renderCards = (category) => {
    cardContainer.innerHTML = ""; // Clear existing cards
    const selectedCards = cardsData[category];
    console.log(`Rendering ${selectedCards.length} cards for ${category}`); // Debugging line
  
    selectedCards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
  
      // Check if youtubeSrc exists, if so, embed a YouTube video
      let mediaContent = "";
      if (card.youtubeSrc) {
        mediaContent = `<iframe 
                          width="100%" 
                          height="315" 
                          src="${card.youtubeSrc}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen>
                        </iframe>`;
      } else if (card.imgSrc) {
        mediaContent = `<img src="${card.imgSrc}" alt="${card.title}">`;
      }
  
      // Add card content
      cardElement.innerHTML = `
        <div class="card-media">${mediaContent}</div>
        <div class="card-content">
          <h2 class="card-title">${card.title}</h2>
          <p class="card-description">${card.description}</p>
        </div>
      `;
  
      cardContainer.appendChild(cardElement);
    });
  };

// Add event listeners to the buttons
document.getElementById("latest-btn").addEventListener("click", () => renderCards("latest"));
document.getElementById("editors-picks-btn").addEventListener("click", () => renderCards("editorsPicks"));
document.getElementById("popular-btn").addEventListener("click", () => renderCards("popular"));

// Load "Latest" cards by default when the page loads
renderCards("latest");

});
document.getElementById("fetchBlogsBtn").addEventListener("click", fetchBlogs);

function fetchBlogs() {
    fetch("scrape.php")
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                alert("No blogs found or failed to fetch.");
                return;
            }

            // Get the container where you want to display the blogs
            const container = document.getElementById("blogs-container");

            // Clear previous content
            container.innerHTML = '';

            // Loop through each blog and create a card
            data.forEach(blog => {
                // Create a card div
                const card5 = document.createElement("div");
                card5.classList.add("blog-card");

                // Create and add the title
                const title = document.createElement("h2");
                title.textContent = blog.title;
                card5.appendChild(title);

                // Create and add the author
                const author = document.createElement("p");
                author.textContent = "By: " + blog.author;
                card5.appendChild(author);

                // Create and add the content (You might want to truncate the content for display)
                const content = document.createElement("p");
                content.textContent = blog.content.substring(0, 200) + '...'; // Truncate for brevity
                card5.appendChild(content);

                // Add a link to the full post
                const readMoreLink = document.createElement("a");
                readMoreLink.href = blog.url;
                readMoreLink.textContent = "Read more";
                readMoreLink.target = "_blank"; // Open in a new tab
                card5.appendChild(readMoreLink);

                // Append the card to the container
                container.appendChild(card5);
            });
        })
        .catch(error => {
            console.error('Error fetching blogs:', error);
        });
}
document.getElementById("read-content").addEventListener("click", () => {
  // Get the blogs container element
  const blogsContainer = document.getElementById("blogs-container");
  
  // Check if blogs container exists and has text content
  if (!blogsContainer || blogsContainer.innerText.trim() === "") {
    alert("No content available to read.");
    return;
  }

  // Combine all text inside the container (blog titles, authors, etc.)
  const contentToRead = blogsContainer.innerText;

  // Create a SpeechSynthesisUtterance instance
  const speech = new SpeechSynthesisUtterance(contentToRead);

  // Configure speech settings
  speech.lang = "en-US";
  speech.rate = 1; // Adjust speed as needed
  speech.pitch = 1; // Adjust pitch as needed

  // Speak the content
  window.speechSynthesis.speak(speech);

  // You can also handle event-based actions or feedback here
  speech.onstart = () => {
    console.log("Speech has started");
  };

  speech.onend = () => {
    console.log("Speech has ended");
  };

  // Handle speech errors (if any)
  speech.onerror = (event) => {
    console.error("Error with speech synthesis:", event.error);
  };
});document.getElementById("stop-reading").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

document.getElementById('subscription-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally

  const email = document.getElementById('email').value;
  const responseMessage = document.getElementById('response-message');

  if (!email) {
      responseMessage.textContent = 'Please enter a valid email address.';
      responseMessage.style.color = 'red';
      return;
  }

  // Send the email to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'subscriber.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function() {
      if (xhr.status === 200) {
          // Handle the server response
          responseMessage.textContent = xhr.responseText;
          responseMessage.style.color = 'green';
      } else {
          responseMessage.textContent = 'Error occurred. Please try again later.';
          responseMessage.style.color = 'red';
      }
  };

  // Send the email parameter to the PHP script
  xhr.send('email=' + encodeURIComponent(email));
});

