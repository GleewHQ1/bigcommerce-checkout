// Updated: Waits for BigCommerce checkout to fully load before inserting fields
setTimeout(function () {
  const waitForElement = (selector, callback) => {
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(interval);
        callback(el);
      }
    }, 500);
  };

  waitForElement('[data-test="shipping-address-form"]', () => {
    const form = document.querySelector('[data-test="shipping-address-form"]');

    const fieldGroup = document.createElement('div');
    fieldGroup.innerHTML = `
      <div class="form-field">
        <label for="building">Building / Apartment *</label>
        <input type="text" id="building" name="building" placeholder="e.g., Building 12, Flat 34" required>
      </div>
      <div class="form-field">
        <label for="zone">Zone / Area *</label>
        <input type="text" id="zone" name="zone" placeholder="e.g., Al Sadd, Marina, Downtown" required>
      </div>
      <div class="form-field">
        <label for="landmark">Landmark or Directions</label>
        <input type="text" id="landmark" name="landmark" placeholder="e.g., Near City Center Mall">
      </div>
    `;

    form.appendChild(fieldGroup);
  });
}, 1000); // Wait 1 second before running
