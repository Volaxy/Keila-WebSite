(function() {
    /* DROP DOWN THE CONTENT BOX *
     *
     * GOAL:
     * Drop down a content's box when there is clicked
     * 
     * STRATEGY:
     * Toggle a class which set the max-height when the button is clicked
    */
    {
        const $loadOtherSectionsButton = document.querySelector("[data-element-id='loadOtherSectionsButton']");

        const allSectionsIsLoaded = false;
        $loadOtherSectionsButton.addEventListener("click", () => {
            const $sections = document.querySelector("[data-element-id='sections']");

            $sections.classList.toggle("learning__sections--max-height");

            allSectionsIsLoaded = !allSectionsIsLoaded;
            
            if(allSectionsIsLoaded) {
                $loadOtherSectionsButton.innerText = "Esconder as outras seções";
            } else {
                $loadOtherSectionsButton.innerText = "Carregar as Outras Seções";
            }
        });

        // If the user click in the bottom sections, the others will be expanded
        const $section = document.querySelector("[data-element-id='sections']");
        $section.addEventListener("click", event => {
            if(event.layerY > getComputedStyle($section).maxHeight.replace("px", "") / 2.5) {
                const $sections = document.querySelector("[data-element-id='sections']");

                $sections.classList.remove("learning__sections--max-height");

                allSectionsIsLoaded = true;
                
                if(allSectionsIsLoaded) {
                    $loadOtherSectionsButton.innerText = "Esconder as outras seções";
                } else {
                    $loadOtherSectionsButton.innerText = "Carregar as Outras Seções";
                }
            }
        });
    }
})();