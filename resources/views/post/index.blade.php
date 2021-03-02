@extends('app')

@section('contents')
<the-page-posts :posts='@json($posts)'></the-page-posts>
@endsection
