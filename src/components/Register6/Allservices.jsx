import React from 'react'

export const Allservices = () => {
  return (
    <>
      <form>
        <select className="dropdownbutton" id="mySelect6" onchange="myFunction()">
          <option value="Category" className="text-muted disabled">Category</option>
          <option value="Accounting & Consultin">Accounting &amp; Consulting</option>
          <option value="Admin Support">Admin Support</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Data Science & Analytics">Data Science &amp; Analytics</option>
          <option value="Design & Creative">Design &amp; Creative</option>
          <option value="Engineering & Arcitecture">Engineering &amp; Arcitecture</option>
          <option value="IT & Networking">IT &amp; Networking</option>
          <option value="Legal">Legal</option>
          <option value="Sales & Marketing">Sales &amp; Marketing</option>
          <option value="Translation">Translation</option>
          <option value="Web, Mobile & Software Dev">Web, Mobile &amp; Software Dev</option>
          <option value="Writing">Writing</option>
        </select><br /><br />
      </form>
    </>
  )
}
