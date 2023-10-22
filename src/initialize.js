import { submitListener } from './ui'
import { loadMap } from './map'

function initialize () {
    loadMap()
    submitListener()
}

export default initialize
