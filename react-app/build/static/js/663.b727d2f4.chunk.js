"use strict"; (self.webpackChunkmodernize = self.webpackChunkmodernize || []).push([[663], { 6663: (e, t, n) => { n.r(t), n.d(t, { default: () => k }); var s = n(9950), i = n(6491), r = n(5769), a = n(4075), c = n(1671), l = n(1320), d = n(9780), o = n(6780), h = n(9213), u = n(7251), m = n(2053), x = n(2235), p = n(5333), j = n(7988), A = n(1295), f = n(8429), g = n(4497), w = n(2074), b = n(4414); function S(e, t, n) { return t[n] < e[n] ? -1 : t[n] > e[n] ? 1 : 0 } const v = [{ id: "id", label: "Id" }, { id: "email", label: "Email" }, { id: "actions", label: "Actions" }]; function y(e) { const { onSelectAllClick: t, order: n, orderBy: s, numSelected: r, rowCount: a, onRequestSort: l } = e; return (0, b.jsx)(d.A, { children: (0, b.jsx)(h.A, { children: v.map((e => { return (0, b.jsx)(c.A, { align: e.numeric ? "right" : "left", padding: e.disablePadding ? "none" : "normal", sortDirection: s === e.id && n, children: (0, b.jsxs)(u.A, { active: s === e.id, direction: s === e.id ? n : "asc", onClick: (t = e.id, e => { l(e, t) }), children: [e.label, s === e.id ? (0, b.jsx)(i.A, { component: "span", sx: A.A, children: "desc" === n ? "sorted descending" : "sorted ascending" }) : null] }) }, e.id); var t })) }) }) } function C() { return (0, b.jsxs)("div", { className: "flex justify-between items-center h-20 px-4", children: [(0, b.jsx)(m.A, { sx: { flex: "1 1 100%" }, variant: "h2", id: "tableTitle", component: "div", children: "Smtp Emails" }), (0, b.jsxs)(w.N_, { to: "/home/add-email", className: "text-white bg-[#142733] flex justify-center items-center text-xl gap-4 border rounded-md border-transparent px-4 py-2", children: [(0, b.jsx)("p", { children: "Add" }), (0, b.jsx)(g.ApK, {})] })] }) } function k() { const e = (0, f.Zp)(), [t, n] = s.useState("asc"), [d, u] = s.useState("calories"), [m, A] = s.useState([]), [g, w] = s.useState(0), [v, k] = s.useState(10), [P, E] = s.useState([]), [N, T] = s.useState([]), z = e => { var t, n = Number(null === e || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.value) || e; k(n), w(0) }; const O = g > 0 ? Math.max(0, (1 + g) * v - P.length) : 0; var R = s.useMemo((() => function (e, t) { const n = e.map(((e, t) => [e, t])); return n.sort(((e, n) => { const s = t(e[0], n[0]); return 0 !== s ? s : e[1] - n[1] })), n.map((e => e[0])) }(P, function (e, t) { return "desc" === e ? (e, n) => S(e, n, t) : (e, n) => -S(e, n, t) }(t, d)).slice(g * v, g * v + v)), [t, d, g, v]); return s.useEffect((() => { !async function () { try { const t = await (await fetch("http://hwsrv-1223902.hostwindsdns.com:4000/api/emails").then()).json(); var e = []; t.forEach(((t, n) => { e.push({ id: n, email: t.email }) })), E(e), z(5) } catch (t) { throw t } }() }), []), 200 === N && (e(0), T(0)), (0, b.jsx)(i.A, { sx: { width: "100%" }, children: (0, b.jsxs)(x.A, { sx: { width: "100%", mb: 2 }, children: [(0, b.jsx)(C, { numSelected: m.length }), (0, b.jsx)(l.A, { children: (0, b.jsxs)(r.A, { sx: { minWidth: 750 }, "aria-labelledby": "tableTitle", size: "medium", children: [(0, b.jsx)(y, { numSelected: m.length, order: t, orderBy: d, onSelectAllClick: e => { if (e.target.checked) { const e = P.map((e => e.id)); A(e) } else A([]) }, onRequestSort: (e, s) => { n(d === s && "asc" === t ? "desc" : "asc"), u(s) }, rowCount: P.length }), (0, b.jsxs)(a.A, { children: [R.map(((e, t) => (0, b.jsxs)(h.A, { tabIndex: -1, children: [(0, b.jsx)(c.A, { component: "th", scope: "row", children: e.id }), (0, b.jsx)(c.A, { children: e.email }), (0, b.jsx)(c.A, { children: (0, b.jsx)(p.A, { onClick: t => { !async function (e, t) { e.preventDefault(); try { 200 === (await fetch("http://hwsrv-1223902.hostwindsdns.com:4000/api/deleteEmail", { method: "POST", body: JSON.stringify({ email: t }), headers: { "Content-Type": "application/json" } })).status && T(200) } catch (n) { throw n } }(t, e.email) }, children: (0, b.jsx)(j.A, {}) }) })] }, e.id))), O > 0 && (0, b.jsx)(h.A, { style: { height: 53 * O }, children: (0, b.jsx)(c.A, { colSpan: 6 }) })] })] }) }), (0, b.jsx)(o.A, { rowsPerPageOptions: [5, 10, 25], component: "div", count: P.length, rowsPerPage: v, page: g, onPageChange: (e, t) => { w(t) }, onRowsPerPageChange: z })] }) }) } } }]);