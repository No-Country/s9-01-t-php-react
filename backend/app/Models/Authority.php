<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Authority extends Model
{
    use HasFactory;

    protected $connection = 'mongodb';
    protected $collection = 'authorities';

    protected $fillable = [
        'urlImg',
        'publicId',
        'position',
        'autorityName',
        'id_user'
    ];

    protected $casts = [
        'urlImg' => 'string',
        'publicId' => 'string',
        'position' => 'string',
        'autorityName' => 'string',
        'id_user' => 'string'
    ];

    public function certificateData()
    {
        return $this->belongsToMany(CertificateData::class, 'certificate_data_authorities', 'authority_id', 'certificate_data_id');
    }
}
