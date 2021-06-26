System.register(["./m"], function (exports_1, context_1) {
    "use strict";
    var m_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (m_1_1) {
                m_1 = m_1_1;
            }
        ],
        execute: function () {
            console.log(m_1.a);
        }
    };
});
