/* Created by: Kenny Le
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * This function calculates the volume of the sphere.
 */
function calculate () {
  // input
  const radius = parseFloat(document.getElementById('sphere-radius').value)

  // process
  const volume = 4 / 3 * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'The volume of the sphere is: ' + volume.toFixed(2) + ' cm³'
}
