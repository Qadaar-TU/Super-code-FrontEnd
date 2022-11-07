// ===================== myVars========================

const text1 = "Sam is going to codingschool";

const sam = text1.slice(0, 4);

const is = text1.slice(4, 7);

const going = text1.slice(7, 13);

const to = text1.slice(13, 16);

const school = text1.slice(22);

const Susi = "Susi";

const text3 = "programming bike";

const and = "and";

// ============================= Satz 1 ==========================

document.write(
  sam.concat(is, going, to, school, and, " to the movie theater", "<br>")
);

// ============================= Satz 2 ==========================

document.write(sam.concat(is, going, to, "movie theater", "<br>"));
// ============================= Satz 3 ==========================

document.write(
  Susi.concat(" ", and, " ", sam, "are ", going, to, school, "<br>")
);

// ============================= Satz 4 ==========================

document.write(
  Susi.concat(
    " ",
    and,
    " ",
    sam,
    "are ",
    going,
    to,
    "gym ",
    and,
    " ",
    to,
    "the ",
    "movie theater",
    "<br>",
    "<br>"
  )
);

// ============================= Satz 5 ==========================

document.write(
  Susi.concat(
    " ",
    is,
    going,
    to,
    school,
    " ",
    and,
    " ",
    to,
    "the movie theater"
  )
);
