@extends('app')

@section('contents')
<list-product :products='@json($products)'></list-product>
@endsection
