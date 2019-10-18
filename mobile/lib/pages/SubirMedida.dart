import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'dart:convert';

class SubirMedida extends StatefulWidget {
  @override
  _SubirMedidaState createState() => _SubirMedidaState();

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return null;
  }
}

class _SubirMedidaState extends State<SubirMedida> {
  String nombreBLE = '';
  final myController = TextEditingController();
  void EscanearButton(){
    nombreBLE = "oscar";
  }

  @override
  void dispose() {
    myController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          child: Padding(
            padding: const EdgeInsets.all(32.0),
            child: Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text("Nombre del dispositivo",
                        style: TextStyle(
                            fontSize: 22.0
                        )
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text("${nombreBLE}",
                      style: TextStyle(
                        fontSize: 25.0,
                        fontWeight: FontWeight.bold
                      ),)
                    ],
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: RaisedButton(
                        child: Text("Escanear"),
                        onPressed: EscanearButton,
                      ),
                    )
                  ],
                ),
                  Container(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Align(
                        alignment: Alignment.bottomCenter,
                        child: Padding(
                          padding: const EdgeInsets.only(top: 64.0),
                          child: Row(
                            children: <Widget>[
                              Text("Medida: ",
                              style: TextStyle(
                                fontSize: 20.0
                              ),),
                                Flexible(
                                  child:
                                   TextField(
                                      decoration: InputDecoration(
                                          border: OutlineInputBorder(),
                                          labelText: 'Capturando medida'
                                      ),
                                      controller: myController
                                  ),
                                ),
                              FloatingActionButton(
                                onPressed: () async {
                                  http.Response response = await http.post('http://the0sprint.herokuapp.com/api/medidas',
                                  body: {'valor': myController.text});
                                },
                                child: Icon(Icons.bluetooth)
                              )
                            ],
                          ),
                        )
                  ),
                    ),
                )
              ],
            ),
          ),
      )
    );
  }

}