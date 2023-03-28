//your code here
var dragSrcElement = null;

function handleDragStart(e) {
  dragSrcElement = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcElement !== this) {
    dragSrcElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  var images = document.querySelectorAll('.image');
  [].forEach.call(images, function(image) {
    image.classList.remove('over');
  });
}

var images = document.querySelectorAll('.image');
[].forEach.call(images, function(image) {
  image.addEventListener('dragstart', handleDragStart, false);
  image.addEventListener('dragover', handleDragOver, false);
  image.addEventListener('drop', handleDrop, false);
  image.addEventListener('dragend', handleDragEnd, false);
});
