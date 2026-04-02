const ALL_QUESTIONS = [
  {
    "question": "¿Cuál es la función principal de los elementos de seguridad activa?",
    "options": ["Minimizar las consecuencias una vez que se ha producido el accidente.", "Evitar que el accidente llegue a producirse.", "Proteger a los peatones en caso de atropello."],
    "answer": 1,
    "explanation": "La seguridad activa comprende todos aquellos elementos destinados a evitar que ocurra un accidente, como los frenos o los neumáticos.",
    "category": "Seguridad Activa"
  },
  {
    "question": "¿Cuál es el objetivo de los dispositivos de seguridad pasiva?",
    "options": ["Reducir las probabilidades de tener un fallo mecánico.", "Mejorar la visibilidad del conductor durante la noche.", "Minimizar las consecuencias de un accidente para los ocupantes."],
    "answer": 2,
    "explanation": "La seguridad pasiva actúa de forma posterior al accidente (P de posterior) para reducir los daños personales, como el cinturón o el airbag.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "En un turismo, ¿cuál es la profundidad mínima legal de las ranuras de la banda de rodadura de los neumáticos?",
    "options": ["2,0 milímetros.", "1,6 milímetros.", "1,2 milímetros."],
    "answer": 1,
    "explanation": "En un turismo, el dibujo de los neumáticos debe tener una profundidad mínima de 1,6 mm para garantizar la adherencia y evacuación de agua.",
    "category": "Mantenimiento"
  },
  {
    "question": "¿Con qué frecuencia se debe comprobar la presión de inflado de los neumáticos?",
    "options": ["Una vez al mes y antes de un viaje largo.", "Cada seis meses, coincidiendo con los cambios de estación.", "Solo cuando se observe visualmente que la rueda está baja."],
    "answer": 0,
    "explanation": "Se recomienda revisar la presión de los neumáticos una vez al mes, siempre en frío y siguiendo las indicaciones del fabricante.",
    "category": "Mantenimiento"
  },
  {
    "question": "Si un neumático tiene una presión de inflado inferior a la recomendada, ¿por dónde se desgastará más?",
    "options": ["Por el centro de la banda de rodadura.", "Por los laterales o flancos.", "De forma irregular por toda la superficie."],
    "answer": 1,
    "explanation": "Una presión insuficiente provoca que el neumático se apoye más en los laterales, causando un mayor desgaste en esa zona y aumentando el consumo.",
    "category": "Mantenimiento"
  },
  {
    "question": "¿Qué ocurre si la presión de inflado de los neumáticos es superior a la recomendada?",
    "options": ["El neumático se desgasta más por el centro.", "El vehículo tiene una mayor adherencia en curvas.", "La suspensión sufre menos ante las irregularidades."],
    "answer": 0,
    "explanation": "Un exceso de presión hace que el neumático se 'infle' más por el centro, provocando un desgaste prematuro en esa zona y haciendo que la suspensión sufra más.",
    "category": "Mantenimiento"
  },
  {
    "question": "Aunque el dibujo esté en buen estado, ¿cada cuánto tiempo es recomendable cambiar los neumáticos?",
    "options": ["Cada 10 años.", "Cada 5 años.", "No es necesario si no hay desgaste."],
    "answer": 1,
    "explanation": "El caucho caduca y se cuartea con el tiempo. Por ello, se recomienda cambiar los neumáticos cada 5 años, independientemente de su uso.",
    "category": "Mantenimiento"
  },
  {
    "question": "¿Está permitido montar en un vehículo neumáticos con un código de velocidad distinto al recomendado por el fabricante?",
    "options": ["No, en ningún caso.", "Sí, siempre que sea igual o superior al recomendado.", "Sí, siempre que sea inferior al recomendado."],
    "answer": 1,
    "explanation": "Se pueden instalar neumáticos con un código de velocidad igual o superior al que trae el vehículo de serie, pero nunca inferior.",
    "category": "Normativa"
  },
  {
    "question": "¿Sobre qué ruedas actúa el freno de servicio o de pie?",
    "options": ["Solo sobre las ruedas delanteras.", "Solo sobre las ruedas motrices.", "Sobre todas las ruedas del vehículo."],
    "answer": 2,
    "explanation": "El freno de servicio actúa sobre las cuatro ruedas del vehículo para garantizar una frenada equilibrada.",
    "category": "Seguridad Activa"
  },
  {
    "question": "¿Cuál es la función principal del sistema ABS en los frenos?",
    "options": ["Reducir siempre la distancia de frenado.", "Evitar que las ruedas se bloqueen en una frenada brusca.", "Aumentar la presión de frenado automáticamente."],
    "answer": 1,
    "explanation": "El sistema ABS evita el bloqueo de las ruedas, lo que permite mantener la direccionabilidad y girar el vehículo mientras se frena a fondo.",
    "category": "Seguridad Activa"
  },
  {
    "question": "¿Qué síntoma puede indicar la presencia de aire en el circuito de frenos?",
    "options": ["Que el pedal se siente esponjoso y blando.", "Que el pedal está muy duro y no baja.", "Que el vehículo se va hacia un lado al frenar."],
    "answer": 0,
    "explanation": "Un pedal de freno esponjoso suele ser indicativo de la entrada de aire en el sistema hidráulico.",
    "category": "Mantenimiento"
  },
  {
    "question": "Si los amortiguadores están en mal estado, ¿cómo afecta a la frenada?",
    "options": ["La distancia de frenado disminuye.", "La distancia de frenado aumenta considerablemente.", "No afecta, ya que la frenada depende solo de los frenos."],
    "answer": 1,
    "explanation": "Unos amortiguadores desgastados no mantienen la rueda firme contra el suelo, lo que provoca rebotes y aumenta la distancia necesaria para detenerse.",
    "category": "Mantenimiento"
  },
  {
    "question": "¿Qué son las luces adaptativas?",
    "options": ["Luces que cambian de color según la velocidad.", "Luces que giran para iluminar el interior de las curvas.", "Luces que se encienden solas cuando detectan lluvia."],
    "answer": 1,
    "explanation": "Las luces adaptativas o angulares ajustan el haz luminoso hacia el lado al que se gira el volante para mejorar la visibilidad en curvas.",
    "category": "Seguridad Activa"
  },
  {
    "question": "¿Qué característica tiene el cristal laminado utilizado en los parabrisas?",
    "options": ["Se rompe en trozos grandes y cortantes.", "Se hace añicos que caen al suelo inmediatamente.", "Tiene una lámina de plástico para que los trozos queden pegados."],
    "answer": 2,
    "explanation": "El laminado evita que, ante un golpe, los trozos de cristal salten a la cara de los ocupantes, manteniéndolos unidos a la lámina plástica interna.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "¿Cuál es el elemento más importante de la seguridad pasiva?",
    "options": ["El airbag.", "El cinturón de seguridad.", "El reposacabezas."],
    "answer": 1,
    "explanation": "El cinturón de seguridad es el elemento fundamental que retiene el cuerpo en caso de deceleración brusca, evitando el impacto contra el interior del coche.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "En el cinturón de seguridad, ¿por dónde debe pasar la banda torácica?",
    "options": ["Por encima del hombro, sobre la clavícula.", "Lo más cerca posible del cuello.", "Por debajo de la axila para mayor comodidad."],
    "answer": 0,
    "explanation": "La banda superior o torácica debe apoyarse en la clavícula, en el centro del pecho, sin rozar el cuello.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "¿Qué es el 'efecto submarino' relacionado con el cinturón?",
    "options": ["Cuando el vehículo cae al agua y el cinturón se bloquea.", "Cuando el cuerpo se desliza por debajo de la banda abdominal.", "Cuando el cinturón aprieta demasiado el pecho al frenar."],
    "answer": 1,
    "explanation": "El efecto submarino ocurre cuando el ocupante se desliza bajo el cinturón en un choque, debido habitualmente a una mala colocación o uso de cojines.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "¿Cuál es la función del airbag como elemento de seguridad pasiva?",
    "options": ["Sustituir al cinturón de seguridad en vehículos modernos.", "Complementar al cinturón, evitando impactos contra el volante o salpicadero.", "Evitar que el vehículo vuelque tras una colisión lateral."],
    "answer": 1,
    "explanation": "El airbag es un sistema complementario; si no se usa el cinturón, el airbag puede ser incluso peligroso al inflarse contra el ocupante.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "¿A qué distancia mínima debe colocarse el conductor con respecto al airbag frontal?",
    "options": ["A 10 centímetros.", "A 25 centímetros.", "A 50 centímetros."],
    "answer": 1,
    "explanation": "Se recomienda mantener una distancia de unos 25 cm para permitir que la bolsa se infle completamente antes de recibir el impacto del cuerpo.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "Como norma general, ¿dónde deben viajar los niños que midan 135 centímetros o menos?",
    "options": ["En el asiento delantero si usan silleta.", "En los asientos traseros utilizando un SRI adecuado.", "En cualquier asiento siempre que el conductor sea el padre."],
    "answer": 1,
    "explanation": "Los menores de hasta 135 cm deben viajar obligatoriamente en los asientos traseros con su sistema de retención.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "¿Cuál es la finalidad principal del reposacabezas?",
    "options": ["Servir de apoyo para descansar el cuello en viajes largos.", "Prevenir lesiones cervicales (esguince cervical) en alcances traseros.", "Mejorar la estética y el confort del asiento."],
    "answer": 1,
    "explanation": "Su función es de seguridad pasiva: evitar el latigazo cervical cuando el vehículo es golpeado por detrás.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "¿A qué altura debe ajustarse el borde superior del reposacabezas?",
    "options": ["A la altura de la nuca.", "A la altura de los ojos o la parte superior de la cabeza.", "Lo más bajo posible para que no moleste."],
    "answer": 1,
    "explanation": "Debe situarse entre la altura de los ojos y la parte superior de la cabeza del ocupante.",
    "category": "Seguridad Pasiva"
  },
  {
    "question": "¿Es obligatorio el uso del casco para conductores de bicicletas fuera de poblado?",
    "options": ["No, es opcional para mayores de 18 años.", "Sí, siempre.", "Sí, excepto en rampas ascendentes prolongadas o extremo calor."],
    "answer": 2,
    "explanation": "Fuera de poblado es obligatorio, pero existen excepciones como el calor extremo o al subir pendientes pronunciadas.",
    "category": "Normativa"
  },
  {
    "question": "En cuanto a la seguridad vial, ¿qué color de casco se considera más seguro?",
    "options": ["Negro, porque se ensucia menos.", "Blanco o colores claros, por su mayor visibilidad.", "Cualquier color es igual de seguro."],
    "answer": 1,
    "explanation": "La visibilidad es un factor de seguridad. Un casco blanco o de color claro se percibe mucho mejor, especialmente de noche o con lluvia.",
    "category": "Seguridad Vial"
  },
  {
    "question": "¿Qué significa la sigla ADAS en seguridad del automóvil?",
    "options": ["Asistencia de Dirección Automática y Segura.", "Sistemas Avanzados de Asistencia al Conductor.", "Aviso de Detención por Accidente de Seguridad."],
    "answer": 1,
    "explanation": "Los ADAS (Advanced Driver Assistance Systems) son soluciones tecnológicas integradas para mejorar la seguridad y la experiencia al volante.",
    "category": "Tecnología"
  },
  {
    "question": "¿Qué hace el sistema ADAS de 'Aviso de salida de carril' (LDW)?",
    "options": ["Gira el volante para devolver el coche al carril.", "Avisa al conductor si cambia de carril de forma imprevista o sin señalizar.", "Frena el coche si detecta que se sale de la calzada."],
    "answer": 1,
    "explanation": "El LDW avisa al conductor (mediante sonido o vibración) si detecta una salida involuntaria del carril por distracción o sueño.",
    "category": "Tecnología"
  },
  {
    "question": "A partir de enero de 2026, ¿qué dispositivo será obligatorio para señalizar una avería o accidente?",
    "options": ["Dos triángulos de preseñalización de peligro.", "La señal luminosa V-16 conectada.", "Chalecos reflectantes de color naranja."],
    "answer": 1,
    "explanation": "Desde el 1 de enero de 2026, la señal V-16 conectada sustituye definitivamente a los triángulos en España.",
    "category": "Normativa"
  },
  {
    "question": "¿Cómo se deben regular los espejos retrovisores?",
    "options": ["Con el vehículo en movimiento para ver el tráfico real.", "Con el vehículo parado y en terreno llano.", "Es indiferente si el coche se mueve o está parado."],
    "answer": 1,
    "explanation": "Deben regularse con el coche detenido y en una calzada recta y llana para obtener un campo de visión preciso.",
    "category": "Mantenimiento"
  },
  {
    "question": "Para realizar una conducción eficiente, ¿cuándo se debe cambiar a una marcha superior en un motor de gasolina?",
    "options": ["A las 1.000 revoluciones por minuto.", "Entre las 2.000 y 2.500 revoluciones por minuto.", "Cuando el motor empiece a hacer mucho ruido."],
    "answer": 1,
    "explanation": "En motores de explosión (gasolina), el cambio óptimo para ahorrar combustible es entre las 2.000 y 2.500 rpm.",
    "category": "Eficiencia"
  },
  {
    "question": "¿Qué factor de riesgo es responsable de la mayoría de los accidentes de tráfico (entre el 70% y el 90%)?",
    "options": ["El factor vehículo (fallos mecánicos).", "El factor humano (distracciones, alcohol, velocidad).", "El factor vía y entorno (lluvia, mal estado del asfalto)."],
    "answer": 1,
    "explanation": "El conductor es el principal causante de los accidentes debido a distracciones, consumo de sustancias o exceso de velocidad.",
    "category": "Seguridad Vial"
  },
  {
    "question": "¿Cómo afecta el sueño a la conducción?",
    "options": ["Aumenta la capacidad de reacción.", "Disminuye la concentración y aumenta el tiempo de reacción.", "Permite conducir más rápido al estar más relajado."],
    "answer": 1,
    "explanation": "La somnolencia reduce peligrosamente la atención y hace que el conductor tarde más en percibir y responder ante un peligro.",
    "category": "Factores de Riesgo"
  },
  {
    "question": "¿Cuál es la tasa máxima de alcoholemia permitida para un conductor novel durante los dos primeros años?",
    "options": ["0,25 mg/l en aire espirado.", "0,15 mg/l en aire espirado.", "0,30 mg/l en aire espirado."],
    "answer": 1,
    "explanation": "Los conductores noveles (2 años) y profesionales tienen una tasa reducida de 0,15 mg/l (0,30 g/l en sangre).",
    "category": "Normativa"
  },
  {
    "question": "En un túnel iluminado, ¿es obligatorio encender las luces del vehículo?",
    "options": ["No, al estar iluminado se ve bien.", "Sí, al menos la luz de posición y la de cruce.", "Solo si el túnel mide más de 200 metros."],
    "answer": 1,
    "explanation": "En túneles y pasos inferiores siempre es obligatorio el uso del alumbrado, independientemente de la iluminación de la vía.",
    "category": "Normativa"
  },
  {
    "question": "¿En qué momento se alcanza el nivel máximo de alcohol en sangre después de la última copa?",
    "options": ["Inmediatamente después de beber.", "Entre 30 y 90 minutos después de la ingesta.", "A las dos horas de haber bebido."],
    "answer": 1,
    "explanation": "El alcohol alcanza su nivel más alto entre 30 y 90 minutos después de la última copa.",
    "category": "Factores de Riesgo"
  },
  {
    "question": "¿Qué efecto produce la cocaína en la conducción?",
    "options": ["Somnolencia y relajación.", "Comportamiento competitivo y agresivo, aceptando mayor riesgo.", "Disminución del tiempo de reacción."],
    "answer": 1,
    "explanation": "La cocaína provoca un estado competitivo y agresivo, reduciendo la concentración y aumentando el riesgo aceptado.",
    "category": "Factores de Riesgo"
  },
  {
    "question": "¿Cuánto tiempo pueden durar las alteraciones emocionales causadas por el LSD?",
    "options": ["Hasta 2 horas.", "Hasta 12 horas.", "Desaparecen inmediatamente tras el consumo."],
    "answer": 1,
    "explanation": "El LSD puede causar alteraciones emocionales como ansiedad o pánico hasta 12 horas después de su consumo.",
    "category": "Factores de Riesgo"
  },
  {
    "question": "¿Cómo influye el sueño en la eliminación del alcohol?",
    "options": ["La eliminación es más rápida mientras se duerme.", "El sueño no afecta a la eliminación del alcohol.", "La eliminación es más lenta durante las horas de sueño."],
    "answer": 2,
    "explanation": "La eliminación del alcohol es más lenta durante las horas de sueño.",
    "category": "Factores de Riesgo"
  },
  {
    "question": "¿Qué le sucede al tiempo de reacción tras consumir alcohol?",
    "options": ["Aumenta.", "Disminuye.", "Se mantiene igual, pero cambia la capacidad."],
    "answer": 0,
    "explanation": "El alcohol aumenta el tiempo de reacción, lo que significa que tardamos más en responder ante un peligro.",
    "category": "Factores de Riesgo"
  },
  {
    "question": "¿Afectan los psicofármacos a la capacidad para conducir?",
    "options": ["No, si han sido recetados por un médico.", "Sí, pueden alterar gravemente las capacidades.", "Solo si se toman dosis muy altas."],
    "answer": 1,
    "explanation": "Los psicofármacos pueden alterar gravemente la capacidad de conducción al afectar los reflejos y la atención.",
    "category": "Factores de Riesgo"
  },
  {
    "question": "En un vehículo de inyección directa, ¿es necesario pisar el acelerador al arrancar?",
    "options": ["Sí, para calentar el motor rápido.", "No, es un gasto innecesario de combustible.", "Solo si el motor está muy frío."],
    "answer": 1,
    "explanation": "En motores modernos no se debe pisar el acelerador al arrancar para evitar el consumo inútil de carburante.",
    "category": "Eficiencia"
  },
  {
    "question": "¿Cómo afecta llevar las ventanillas bajadas a la eficiencia del combustible?",
    "options": ["No afecta en absoluto.", "Reduce el consumo al no usar aire acondicionado.", "Aumenta el consumo al empeorar la aerodinámica del vehículo."],
    "answer": 2,
    "explanation": "Las ventanillas bajadas afectan la aerodinámica y aumentan el consumo, especialmente a alta velocidad.",
    "category": "Eficiencia"
  },
  {
    "question": "Si prevemos una detención superior a un minuto, ¿qué debemos hacer para ahorrar?",
    "options": ["Mantener el motor a ralentí.", "Pisar el embrague a fondo.", "Apagar el motor."],
    "answer": 2,
    "explanation": "En detenciones prolongadas, apagar el motor contribuye significativamente al ahorro de carburante.",
    "category": "Eficiencia"
  }
];
