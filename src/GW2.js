import React, { Component } from 'react'

class GW2 extends Component {
    state = {
        dailies: {
            pve: [],
            pvp: [],
            wvw: [],
            fractals: [],
            special: [],
        }
    }

    constructor(props) {
        super(props)
        this.fetchData(this.props)
    }

    fetchData = (props) => {
        fetch('https://api.guildwars2.com/v2/achievements/daily')
            .then(response => response.json())
            .then(dailies => this.setState({ dailies }))
    }

    render() {
        let achieves = {}

        return (
            <div>
                {
                    this.state.dailies.pve.map(function(achievo) {
                       fetch(`https://api.guildwars2.com/v2/achievements?ids=${achievo.id}`)
                            .then(response => response.json())
                            .then(daily => achieves[achievo.id] = daily)
                    })

                }
                {
                    console.log(achieves)
                }
            </div>
        )
    }
}

export default GW2