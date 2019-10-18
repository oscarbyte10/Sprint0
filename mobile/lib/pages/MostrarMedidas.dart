import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'dart:convert';

class MostrarMedidas extends StatefulWidget {
@override
_MostrarMedidas createState() => _MostrarMedidas();

@override
Widget build(BuildContext context) {
  // TODO: implement build
  return null;
}
}

class _MostrarMedidas extends State<MostrarMedidas> {
  Map data;
  List medidasData;
  List medidasParaMostrar;
  void getMedidas() async {
    http.Response response = await http.get('http://the0sprint.herokuapp.com/api/medidas');
    data = json.decode(response.body);
    setState(() {
      medidasData = data['medidas'];
      Iterable inReverse = medidasData.reversed;
      medidasParaMostrar = inReverse.toList();
    });
  }

  Future<Null> refreshList() async{
    await Future.delayed(Duration(seconds: 2));
    http.Response response = await http.get('http://the0sprint.herokuapp.com/api/medidas') as http.Response;
    data = json.decode(response.body);
    setState(() {
      medidasData = data['medidas'];
      Iterable inReverse = medidasData.reversed;
      medidasParaMostrar = inReverse.toList();
    });
  }

  @override
  void initState() {
    super.initState();
    getMedidas();
  }

  Widget build(BuildContext context) {
    return Scaffold(
        body: RefreshIndicator(
          child: ListView.builder(
            itemCount: medidasData == null ? 0 : medidasData.length,
            itemBuilder: (BuildContext context, int index) {
              return Card(
                  child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        children: <Widget>[
                          Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(
                                  "${index+1}",
                                  style: TextStyle(
                                      fontSize: 15.0,
                                      fontWeight: FontWeight.w400
                                  )
                              )
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Text("${medidasParaMostrar[index]["valor"]}" + "%",
                              style: TextStyle(
                                fontSize: 20.0,
                              ),
                            ),
                          )
                        ],
                      )
                  )
              );
            },
          ),
          onRefresh: refreshList,
        )
    );
  }
}