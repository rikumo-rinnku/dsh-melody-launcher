(() => {
  const overlay = document.querySelector('.wheelchair-mode-overlay')
  const styleEl = document.getElementById('wheelchair-mode-styles')
  const topbar = document.querySelector('.topbar')
  const cs = overlay ? getComputedStyle(overlay) : null
  const tcs = topbar ? getComputedStyle(topbar) : null
  const c3 = document.elementFromPoint(3, 3)
  const c14 = document.elementFromPoint(14, 14)
  const styleRule = styleEl ? (styleEl.textContent.match(/\.wheelchair-mode-overlay \{[^}]*\}/) || [''])[0] : ''
  const r = (el) => el ? JSON.parse(JSON.stringify(el.getBoundingClientRect())) : null
  return JSON.stringify({
    overlayExists: !!overlay,
    overlayRule: styleRule,
    overlayRadius: cs && cs.borderRadius,
    overlayOverflow: cs && cs.overflow,
    overlayBg: cs && cs.backgroundColor,
    overlayRect: r(overlay),
    topbarRect: r(topbar),
    topbarBg: tcs && tcs.backgroundColor,
    topbarPos: tcs && tcs.position,
    corner3: c3 ? (String(c3.className) || c3.tagName) + ' bg=' + getComputedStyle(c3).backgroundColor : null,
    corner14: c14 ? (String(c14.className) || c14.tagName) + ' bg=' + getComputedStyle(c14).backgroundColor : null,
    htmlBg: getComputedStyle(document.documentElement).backgroundColor,
    htmlRadius: getComputedStyle(document.documentElement).borderRadius,
    htmlClass: document.documentElement.className,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    innerSize: innerWidth + 'x' + innerHeight,
  }, null, 1)
})()
