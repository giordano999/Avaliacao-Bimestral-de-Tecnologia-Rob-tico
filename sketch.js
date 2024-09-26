    ellipse(this.x, this.y, this.r * 2);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  // check if the mouse was pressed on this control point
  pressed(px, py) {
    return dist(px, py, this.x, this.y) < this.r;
  }
}

function mousePressed() {
  // check if the mouse was pressed on a control point
  for (let i = 0; i < points.length; i++) {
    if (points[i].pressed(mouseX, mouseY)) {
      points[i].dragging = true;
    }
  }
}

