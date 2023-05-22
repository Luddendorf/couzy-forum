// A mock function to mimic making an async request to our back-end
export function sendSelectedMenuItem(selectedMenuItem = 'topbar-browse') {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: selectedMenuItem }), 500)
    );
  }