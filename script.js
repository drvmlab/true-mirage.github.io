      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const banners = section.querySelectorAll(".banner");
        const title = section.querySelector("h2");

        banners.forEach((banner) => {
          const img = banner.querySelector("img");

          banner.addEventListener("mouseover", () => {
            title.style.opacity = "1";
          });

          banner.addEventListener("mouseout", () => {
            title.style.opacity = "0";
          });
        });
      });
      
