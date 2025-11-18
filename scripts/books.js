/* Books Library using prompt/alert UI
   - Stores book objects in library array
   - Each book: { title, author, isRead }
   - Functions: addBook, listBooks, markAsRead, removeBook, listUnread
   - runLibraryUI shows a prompt-based menu until user exits
*/

const library = [];

function createBook(title, author, isRead = false) {
  return { title: String(title).trim(), author: String(author).trim(), isRead: !!isRead };
}

function addBook() {
  const title = prompt('Enter book title:');
  if (title === null) return false; // cancelled
  if (title.trim() === '') {
    alert('Title cannot be empty.');
    return false;
  }

  const author = prompt('Enter author name:');
  if (author === null) return false;
  if (author.trim() === '') {
    alert('Author cannot be empty.');
    return false;
  }

  const isReadAnswer = prompt('Have you read this book? (y/n)');
  if (isReadAnswer === null) return false;
  const isRead = String(isReadAnswer).trim().toLowerCase().startsWith('y');

  const book = createBook(title, author, isRead);
  library.push(book);
  alert(`Added: "${book.title}" by ${book.author} (${book.isRead ? 'read' : 'unread'})`);
  return true;
}

function listBooks() {
  if (library.length === 0) {
    console.log('Library is empty.');
    alert('Library is empty. (open console for details)');
    return;
  }
  console.log('Library:');
  library.forEach((b, i) => {
    console.log(`${i + 1}. "${b.title}" by ${b.author} — ${b.isRead ? 'read' : 'unread'}`);
  });
  alert(`Printed ${library.length} book(s) to console.`);
}

function findBookIndexByTitle(title) {
  const t = String(title).trim().toLowerCase();
  return library.findIndex(b => b.title.toLowerCase() === t);
}

function markAsRead(title) {
  if (title === null) return false; // cancelled
  const idx = findBookIndexByTitle(title);
  if (idx === -1) {
    alert(`Book titled "${title}" not found.`);
    return false;
  }
  library[idx].isRead = true;
  alert(`Marked "${library[idx].title}" as read.`);
  return true;
}

function removeBook(title) {
  if (title === null) return false; // cancelled
  const idx = findBookIndexByTitle(title);
  if (idx === -1) {
    alert(`Book titled "${title}" not found.`);
    return false;
  }
  const removed = library.splice(idx, 1)[0];
  alert(`Removed "${removed.title}" by ${removed.author}.`);
  return true;
}

function listUnread() {
  const unread = library.filter(b => !b.isRead);
  if (unread.length === 0) {
    console.log('No unread books.');
    alert('No unread books. (open console for details)');
    return;
  }
  console.log('Unread books:');
  unread.forEach((b, i) => console.log(`${i + 1}. "${b.title}" by ${b.author}`));
  alert(`Printed ${unread.length} unread book(s) to console.`);
}

// Helper to ask for a title with simple cancel handling
function askForTitle(actionText) {
  const input = prompt(actionText + ' (type full book title):');
  if (input === null) return null;
  if (input.trim() === '') {
    alert('Title cannot be empty.');
    return NaN;
  }
  return input;
}

// Main UI loop
function runLibraryUI() {
  while (true) {
    const choice = prompt(
`Book Library - choose an option:
1 - Add a book
2 - List all books (console)
3 - Mark a book as read
4 - Remove a book
5 - List unread books (console)
6 - Exit`
    );

    if (choice === null) {
      // user cancelled menu -> exit
      return;
    }

    switch (choice.trim()) {
      case '1':
        addBook();
        break;
      case '2':
        listBooks();
        break;
      case '3': {
        const title = askForTitle('Mark as read');
        if (title === null) break; // cancelled
        if (Number.isNaN(title)) break; // invalid
        markAsRead(title);
        break;
      }
      case '4': {
        const title = askForTitle('Remove book');
        if (title === null) break;
        if (Number.isNaN(title)) break;
        // confirm
        const ok = confirm(`Are you sure you want to remove "${title}"?`);
        if (ok) removeBook(title);
        break;
      }
      case '5':
        listUnread();
        break;
      case '6':
        return; // exit UI
      default:
        alert('Unknown option. Please type 1-6.');
    }
  }
}


if (typeof window !== 'undefined') {
  window.runLibraryUI = runLibraryUI;
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('startLibraryBtn');
    if (btn) btn.addEventListener('click', runLibraryUI);
  });
}
