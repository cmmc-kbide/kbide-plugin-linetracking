module.exports = [
    {
        name: "IR Line Tracking",
        blocks: [
            {
                xml:
                    `<block type="line_tracking_begin">
                        <value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'line_tracking_read_digital',
            'line_tracking_read_analog',
            {
                xml:
                    `<block type="line_tracking_map_value">
                        <value name="VALUE">
                            <block type="line_tracking_read_analog">
                            </block>
                        </value>
                    </block>`
            },
            'line_tracking_Level'
        ]
    }
];