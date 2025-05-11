const base = 100

const edu = { bachelor: 1.5, college: 1.2, high_school: 1.05, middle_school: 0.9 }
const worth = { upper: 2, middle: 1.5, lower: 1.2 }
const ageC = { "18_23": 1.5, "24_27": 1.2, "28_plus": 0.95 }
const casteB = { brahmin: 100, kshatriya: 50, vaishya: 20, shudra: 10, untouchable: -50 }
const skillB = { skill_music: 10, skill_cook: 20, skill_easy: 15, skill_sing: 10 }
const repC = { rep_parents: 0.85, rep_character: 0.9, rep_general: 0.85 }

function v(id) { return document.getElementById(id).value }
function chk(id) { return document.getElementById(id).checked }

function calc() {
  const e = v("education")
  const n = v("networth")
  const c = v("caste")
  const a = document.querySelector('input[name="age"]:checked')?.value || ""
  if (!e || !n || !c || !a) { out("Fill every field"); return }

  let k = edu[e] * worth[n] * ageC[a]
  Object.keys(repC).forEach(r => { if (chk(r)) k *= repC[r] })

  let b = casteB[c]
  Object.keys(skillB).forEach(s => { if (chk(s)) b += skillB[s] })

  const price = Math.round(base * k + b)
  out(`Final price: $${price}`)
}

function out(t) {
  const r = document.getElementById("result")
  r.textContent = t
  r.style.background = "#f7fff7"
  document.querySelector("h1").textContent = "Dowry calculator ✓"
  document.getElementById("submit").textContent = "Recalculate"
}

document.getElementById("submit").addEventListener("click", calc)
