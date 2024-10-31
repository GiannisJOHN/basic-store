document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
  
    // Attach change event listeners to each checkbox
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", handleFilterChange);
    });
  
    function handleFilterChange() {
      const selectedFilters = getSelectedFilters();
      const queryString = buildQueryString(selectedFilters);
      
      // Redirect to the new URL with updated filters (triggers page reload)
      window.location.href = `${window.location.pathname}${queryString}`;
    }
  
    // Gather selected filters from checkboxes
    function getSelectedFilters() {
      const filters = {};
      
      // Iterate through each checkbox
      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          const filterName = checkbox.name;
          const filterValue = checkbox.value;
  
          // Initialize the array for this filter name if it doesn't exist
          if (!filters[filterName]) {
            filters[filterName] = [];
          }
  
          // Add the checked value to the corresponding filter array
          filters[filterName].push(filterValue);
        }
      });
  
      return filters; // Return the object containing all selected filters
    }
  
    // Convert selected filters into URL query string format
    function buildQueryString(filters) {
      const params = new URLSearchParams();
      
      Object.keys(filters).forEach(function(filter) {
        params.append(filter, filters[filter].join(','));
      });
  
      return `?${params.toString()}`; // Return the formatted query string
    }
  });