function qrC(r) {
  qr.canvas({
    "canvas": document.getElementById("qrcode"),
    "value": r
  });
}

!function(r) {
  function e(e, o, f) {
    o = o.mime || q, r.location.href = e.toDataURL(o).replace(o, W), "function" == typeof f && f();
  }
  function o(r) {
    return "string" == typeof r && (r = {
      "value": r
    }), r || {};
  }
  function f(r) {
    function e(e) {
      r[e] = "";
    }
    var o, f = [ "canvas", "image", "save", "saveSync", "toDataURL" ];
    for (o = 0; o < f.length; o++) {
      e(f[o]);
    }
  }
  function t(r, e, o) {
    function f() {
      m.write(t, n, 0, n.length, 0, function(r) {
        m.close(t), o(r);
      });
    }
    var t, n;
    r.toBuffer(function(r, e) {
      return r ? o(r) : (n = e, t && f(), void 0);
    }), m.open(e.path, "w", O, function(r, e) {
      return r ? o(r) : (t = e, n && f(), void 0);
    });
  }
  function n(r, e) {
    var o;
    r > e && (o = r, r = e, e = o), o = e * e, o += e, o >>= 1, o += r, z[o] = 1;
  }
  function a(r, e) {
    var o;
    for (T[r + w * e] = 1, o = -2; 2 > o; o++) {
      T[r + o + w * (e - 2)] = 1, T[r - 2 + w * (e + o + 1)] = 1, T[r + 2 + w * (e + o)] = 1, 
      T[r + o + 1 + w * (e + 2)] = 1;
    }
    for (o = 0; 2 > o; o++) {
      n(r - 1, e + o), n(r + 1, e - o), n(r - o, e - 1), n(r + o, e + 1);
    }
  }
  function i(r) {
    for (;r >= 255; ) {
      r -= 255, r = (r >> 8) + (255 & r);
    }
    return r;
  }
  function c(r, e, o, f) {
    var t, n, a;
    for (n = 0; f > n; n++) {
      Q[o + n] = 0;
    }
    for (n = 0; e > n; n++) {
      if (t = B[Q[r + n] ^ Q[o]], 255 !== t) {
        for (a = 1; f > a; a++) {
          Q[o + a - 1] = Q[o + a] ^ C[i(t + D[f - a])];
        }
      } else {
        for (a = o; o + f > a; a++) {
          Q[a] = Q[a + 1];
        }
      }
      Q[o + f - 1] = 255 === t ? 0 : C[i(t + D[0])];
    }
  }
  function s(r, e) {
    var o;
    return r > e && (o = r, r = e, e = o), o = e + e * e, o >>= 1, o += r, 1 === z[o];
  }
  function l(r) {
    var e, o, f;
    switch (r) {
     case 0:
      for (e = 0; w > e; e++) {
        for (r = 0; w > r; r++) {
          1 & r + e || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
      break;

     case 1:
      for (e = 0; w > e; e++) {
        for (r = 0; w > r; r++) {
          1 & e || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
      break;

     case 2:
      for (e = 0; w > e; e++) {
        for (r = o = 0; w > r; r++, o++) {
          3 === o && (o = 0), o || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
      break;

     case 3:
      for (e = f = 0; w > e; e++, f++) {
        for (3 === f && (f = 0), o = f, r = 0; w > r; r++, o++) {
          3 === o && (o = 0), o || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
      break;

     case 4:
      for (e = 0; w > e; e++) {
        for (o = 0, f = 1 & e >> 1, r = 0; w > r; r++, o++) {
          3 === o && (o = 0, f = !f), f || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
      break;

     case 5:
      for (e = f = 0; w > e; e++, f++) {
        for (3 === f && (f = 0), r = o = 0; w > r; r++, o++) {
          3 === o && (o = 0), (1 & r & e) + !(!o | !f) || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
      break;

     case 6:
      for (e = f = 0; w > e; e++, f++) {
        for (3 === f && (f = 0), r = o = 0; w > r; r++, o++) {
          3 === o && (o = 0), 1 & (1 & r & e) + (o && o === f) || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
      break;

     case 7:
      for (e = f = 0; w > e; e++, f++) {
        for (3 === f && (f = 0), r = o = 0; w > r; r++, o++) {
          3 === o && (o = 0), 1 & (o && o === f) + (1 & r + e) || s(r, e) || (T[r + e * w] ^= 1);
        }
      }
    }
  }
  function u(r) {
    var e, o = 0;
    for (e = 0; r >= e; e++) {
      5 <= E[e] && (o += F + E[e] - 5);
    }
    for (e = 3; r - 1 > e; e += 2) {
      E[e - 2] === E[e + 2] && E[e + 2] === E[e - 1] && E[e - 1] === E[e + 1] && 3 * E[e - 1] === E[e] && (0 === E[e - 3] || e + 3 > r || 3 * E[e - 3] >= 4 * E[e] || 3 * E[e + 3] >= 4 * E[e]) && (o += U);
    }
    return o;
  }
  var v, h, p, g, d, m, y, R, w, b = [ 0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28 ], q = "image/png", W = "image/octet-stream", k = [ 1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30 ], S = {
    "L": 1,
    "M": 2,
    "Q": 3,
    "H": 4
  }, V = [ 30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107 ], C = [ 1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0 ], B = [ 255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175 ], F = 3, U = 40, x = [ 3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177 ], O = 438, E = [], L = [], H = 1, T = [], z = [], M = !1, D = [], I = r.qr, Q = [], A = {
    "VERSION": "1.1.3",
    "canvas": function(e) {
      var f, t, m, y, q, F, U, O, I, A, W, G, j, N;
      e = o(e), f = 1 > e.size || 10 < e.size ? 4 : e.size, f = sizer.value, t = e.canvas || (M ? new v() : r.document.createElement("canvas")), 
      m = t.getContext("2d"), m.canvas.width = f, m.canvas.height = f, m.fillStyle = e.background || "#fff", 
      m.fillRect(0, 0, f, f), H = S[e.level && e.level.toUpperCase() || "L"], W = e.value || "", 
      q = W.length, R = 0;
      do {
        if (R++, y = 4 * (H - 1) + 16 * (R - 1), g = k[y++], d = k[y++], h = k[y++], p = k[y], 
        y = h * (g + d) + d - 3 + (9 >= R), y >= q) {
          break;
        }
      } while (40 > R);
      for (w = 17 + 4 * R, I = h + (h + p) * (g + d) + d, q = 0; I > q; q++) {
        L[q] = 0;
      }
      for (Q = W.slice(0), q = 0; w * w > q; q++) {
        T[q] = 0;
      }
      for (q = 0; (w * (w + 1) + 1) / 2 > q; q++) {
        z[q] = 0;
      }
      for (q = 0; 3 > q; q++) {
        for (y = W = 0, 1 === q && (y = w - 7), 2 === q && (W = w - 7), T[W + 3 + w * (y + 3)] = 1, 
        A = 0; 6 > A; A++) {
          T[W + A + w * y] = 1, T[W + w * (y + A + 1)] = 1, T[W + 6 + w * (y + A)] = 1, T[W + A + 1 + w * (y + 6)] = 1;
        }
        for (A = 1; 5 > A; A++) {
          n(W + A, y + 1), n(W + 1, y + A + 1), n(W + 5, y + A), n(W + A + 1, y + 5);
        }
        for (A = 2; 4 > A; A++) {
          T[W + A + w * (y + 2)] = 1, T[W + 2 + w * (y + A + 1)] = 1, T[W + 4 + w * (y + A)] = 1, 
          T[W + A + 1 + w * (y + 4)] = 1;
        }
      }
      if (R > 1) {
        for (q = b[R], W = w - 7; ;) {
          for (A = w - 7; A > q - 3 && (a(A, W), q <= A); ) {
            A -= q;
          }
          if (q + 9 >= W) {
            break;
          }
          W -= q, a(6, W), a(W, 6);
        }
      }
      for (T[8 + w * (w - 8)] = 1, W = 0; 7 > W; W++) {
        n(7, W), n(w - 8, W), n(7, W + w - 7);
      }
      for (A = 0; 8 > A; A++) {
        n(A, 7), n(A + w - 8, 7), n(A, w - 8);
      }
      for (A = 0; 9 > A; A++) {
        n(A, 8);
      }
      for (A = 0; 8 > A; A++) {
        n(A + w - 8, 8), n(8, A);
      }
      for (W = 0; 7 > W; W++) {
        n(8, W + w - 7);
      }
      for (A = 0; w - 14 > A; A++) {
        1 & A ? (n(8 + A, 6), n(6, 8 + A)) : (T[8 + A + 6 * w] = 1, T[6 + w * (8 + A)] = 1);
      }
      if (R > 6) {
        for (q = x[R - 7], y = 17, A = 0; 6 > A; A++) {
          for (W = 0; 3 > W; W++, y--) {
            1 & (y > 11 ? R >> y - 12 : q >> y) ? (T[5 - A + w * (2 - W + w - 11)] = 1, T[2 - W + w - 11 + w * (5 - A)] = 1) : (n(5 - A, 2 - W + w - 11), 
            n(2 - W + w - 11, 5 - A));
          }
        }
      }
      for (W = 0; w > W; W++) {
        for (A = 0; W >= A; A++) {
          T[A + w * W] && n(A, W);
        }
      }
      for (I = Q.length, F = 0; I > F; F++) {
        L[F] = Q.charCodeAt(F);
      }
      if (Q = L.slice(0), A = h * (g + d) + d, I >= A - 2 && (I = A - 2, R > 9 && I--), 
      F = I, R > 9) {
        for (Q[F + 2] = 0, Q[F + 3] = 0; F--; ) {
          q = Q[F], Q[F + 3] |= 255 & q << 4, Q[F + 2] = q >> 4;
        }
        Q[2] |= 255 & I << 4, Q[1] = I >> 4, Q[0] = 64 | I >> 12;
      } else {
        for (Q[F + 1] = 0, Q[F + 2] = 0; F--; ) {
          q = Q[F], Q[F + 2] |= 255 & q << 4, Q[F + 1] = q >> 4;
        }
        Q[1] |= 255 & I << 4, Q[0] = 64 | I >> 4;
      }
      for (F = I + 3 - (10 > R); A > F; ) {
        Q[F++] = 236, Q[F++] = 17;
      }
      for (D[0] = 1, F = 0; p > F; F++) {
        for (D[F + 1] = 1, U = F; U > 0; U--) {
          D[U] = D[U] ? D[U - 1] ^ C[i(B[D[U]] + F)] : D[U - 1];
        }
        D[0] = C[i(B[D[0]] + F)];
      }
      for (F = 0; p >= F; F++) {
        D[F] = B[D[F]];
      }
      for (y = A, F = W = 0; g > F; F++) {
        c(W, h, y, p), W += h, y += p;
      }
      for (F = 0; d > F; F++) {
        c(W, h + 1, y, p), W += h + 1, y += p;
      }
      for (F = W = 0; h > F; F++) {
        for (U = 0; g > U; U++) {
          L[W++] = Q[F + U * h];
        }
        for (U = 0; d > U; U++) {
          L[W++] = Q[g * h + F + U * (h + 1)];
        }
      }
      for (U = 0; d > U; U++) {
        L[W++] = Q[g * h + F + U * (h + 1)];
      }
      for (F = 0; p > F; F++) {
        for (U = 0; g + d > U; U++) {
          L[W++] = Q[A + F + U * p];
        }
      }
      for (Q = L, A = W = w - 1, y = I = 1, O = (h + p) * (g + d) + d, F = 0; O > F; F++) {
        for (q = Q[F], U = 0; 8 > U; U++, q <<= 1) {
          128 & q && (T[A + w * W] = 1);
          do {
            I ? A-- : (A++, y ? 0 !== W ? W-- : (A -= 2, y = !y, 6 === A && (A--, W = 9)) : W !== w - 1 ? W++ : (A -= 2, 
            y = !y, 6 === A && (A--, W -= 8))), I = !I;
          } while (s(A, W));
        }
      }
      for (Q = T.slice(0), q = 0, W = 3e4, y = 0; 8 > y; y++) {
        for (l(y), G = F = A = U = I = O = U = void 0, j = void 0, N = void 0, N = I = A = F = 0; w - 1 > N; N++) {
          for (j = 0; w - 1 > j; j++) {
            (T[j + w * N] && T[j + 1 + w * N] && T[j + w * (N + 1)] && T[j + 1 + w * (N + 1)] || !(T[j + w * N] || T[j + 1 + w * N] || T[j + w * (N + 1)] || T[j + 1 + w * (N + 1)])) && (I += 3);
          }
        }
        for (N = 0; w > N; N++) {
          for (G = U = j = E[0] = 0; w > j; j++) {
            (O = T[j + w * N]) === U ? E[G]++ : E[++G] = 1, U = O, A += U ? 1 : -1;
          }
          I += u(G);
        }
        for (0 > A && (A = -A), U = A, U += U << 2, U <<= 1; U > w * w; ) {
          U -= w * w, F++;
        }
        for (I += 10 * F, j = 0; w > j; j++) {
          for (G = U = N = E[0] = 0; w > N; N++) {
            (O = T[j + w * N]) === U ? E[G]++ : E[++G] = 1, U = O;
          }
          I += u(G);
        }
        if (A = I, W > A && (W = A, q = y), 7 === q) {
          break;
        }
        T = Q.slice(0);
      }
      for (q !== y && l(q), W = V[q + (H - 1 << 3)], y = 0; 8 > y; y++, W >>= 1) {
        1 & W && (T[w - 1 - y + 8 * w] = 1, 6 > y ? T[8 + w * y] = 1 : T[8 + w * (y + 1)] = 1);
      }
      for (y = 0; 7 > y; y++, W >>= 1) {
        1 & W && (T[8 + w * (w - 7 + y)] = 1, y ? T[6 - y + 8 * w] = 1 : T[7 + 8 * w] = 1);
      }
      for (y = T, m.lineWidth = 1, q = f / w, q = Math.floor(q), m.clearRect(0, 0, f, f), 
      m.fillStyle = e.background || "#fff", m.fillRect(0, 0, q * (w + 8), q * (w + 8)), 
      m.fillStyle = e.foreground || "#000", e = 0; w > e; e++) {
        for (f = 0; w > f; f++) {
          y[f * w + e] && m.fillRect(q * e, q * f, q, q);
        }
      }
      return t;
    },
    "image": function(e) {
      var f, t;
      return e = o(e), f = this.canvas(e), t = e.image || (M ? new y() : r.document.createElement("img")), 
      t.src = f.toDataURL(e.mime || q), t.height = f.height, t.width = f.width, t;
    },
    "save": function(r, f, n) {
      function a(r) {
        i || (i = !0, n(r));
      }
      var i;
      switch (r = o(r), typeof f) {
       case "function":
        n = f, f = null;
        break;

       case "string":
        r.path = f;
      }
      i = !1, f = this.canvas(r), M ? t(f, r, a) : e(f, r, a);
    },
    "saveSync": function(r, f) {
      var t, n;
      if (r = o(r), "string" == typeof f && (r.path = f), t = this.canvas(r), M) {
        n = r, t = t.toBuffer(), n = m.openSync(n.path, "w", O);
        try {
          m.writeSync(n, t, 0, t.length, 0);
        } finally {
          m.closeSync(n);
        }
      } else {
        e(t, r);
      }
    },
    "toDataURL": function(r) {
      return r = o(r), this.canvas(r).toDataURL(r.mime || q);
    },
    "noConflict": function() {
      return r.qr = I, this;
    }
  };
  "undefined" != typeof exports ? (M = !0, "undefined" != typeof module && module.exports && (exports = module.exports = A), 
  exports.qr = A, v = require("canvas"), y = v.Image, m = require("fs")) : "function" == typeof define && define.amd ? define(function() {
    return A;
  }) : (r.HTMLCanvasElement || f(A), r.qr = A);
}(this);

//SAMPLE USAGE:
//qrC(" http://www.whak.ca/ ");
