
# Modal component
A modal with 1 button to open it and a cross when it opens to close it
---
## How to use the modal component?

You can find npm package :
here 's github repository : 

```
npm install malaurycte

```
```

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <span>X</span>
        </button>
        {children}
      </div>
    </div>
  );

  ```

In progress

---



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



The page will reload when you make changes.


