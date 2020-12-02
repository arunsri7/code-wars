function validSpacing(s) {
    if (s[0] === " " || s[s.length - 1] === " " || s === " " || s.includes("  ")) return false;
    else return true;
}