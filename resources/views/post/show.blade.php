@extends('app')

@section('contents')
<the-page-post :post='@json($post)'></the-page-post>
@endsection
